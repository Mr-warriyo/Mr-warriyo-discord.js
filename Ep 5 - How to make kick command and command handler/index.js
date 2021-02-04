const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.json')

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', message => {
  if (message.content === `${config.prefix}ping`) {
    message.channel.send(`The Ping Of Bot Is ${client.ws.ping}ms.\nBot Latency ${Date.now() - message.createdTimestamp}ms`);
  }
});


client.on('message', message => {
  if (message.content.startsWith(`${config.prefix}avatar`)) {
    const user = message.mentions.users.first() || message.author;
    const avEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(user.tag)
        .setImage(user.avatarURL({dynamic: "true"}));
    message.channel.send(avEmbed)
  } 
});
let prefix = (config.prefix);
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
});
const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
 
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
 
const cooldowns = new Discord.Collection();
 
client.once('ready', () => {
	console.log('Ready with commands!');
});
 
 
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
 
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
 
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
 
	if (!command) return;
 
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
 
	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
 
		if (!command.usage) {
			const reply = `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}
 
		return message.channel.send(reply);
	}
 
	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}
 
	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;
 
	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
 
		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}
 
	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
 
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
}
});

client.login(config.token);
