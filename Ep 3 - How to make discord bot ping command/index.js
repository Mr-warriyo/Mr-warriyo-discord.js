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
 
client.login(config.token);
