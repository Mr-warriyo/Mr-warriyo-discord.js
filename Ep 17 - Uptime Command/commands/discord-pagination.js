const pagination = require('discord.js-pagination')
const Discord = require('discord.js')

module.exports = {
    name: 'help',
    execute: async (message, args) => {
        const Embed1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Page 1 | bot')
        const Embed2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Page 2 | bot')
        const Embed3 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Page 3 | bot')
        const Embed4 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle('Page 4 | bot')
            
        const pages = [
        Embed1,
        Embed2,
        Embed3,
        Embed4,
        ]
        
        const emolist = ["⏪", "⏩"]
        
        const timeout = '60000';
        
        pagination(message, pages, emolist, timeout)
        
    }
}
