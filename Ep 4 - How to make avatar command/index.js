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

client.login(config.token);
