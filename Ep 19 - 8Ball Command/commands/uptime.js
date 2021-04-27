const Discord = require('discord.js')

module.exports = {
    name: 'uptime',
    execute: async (message, args) => {
        let seconds = Math.floor(message.client.uptime/1000);
        let minutes = Math.floor(seconds/60);
        let hours = Math.floor(minutes/60);
        let days = Math.floor(hours/20);
        
        seconds %= 60        
        minutes %= 60
        hours %= 24
        
        message.channel.send(`Uptime of Bot: ${seconds} second(s) ${minutes} minute(s) ${hours} hour(s) ${days} day(s)`)
    }
}