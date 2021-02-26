const Discord = require('discord.js')

module.exports = {
    name: 'slowmode',
    execute: async (message, args) => {
        if (!args[0]) return message.channel.send('please give me some time for slowmode')
        if (args[0] > 21600) return message.reply('a slowmode cannot be more then 6 hours')
        
        message.channel.setRateLimitPerUser(args[0])
        message.channel.send(`slowmode enabled for (args[0]) seconds`)
    }
}
    // >slowmode 10