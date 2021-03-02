const Discord = require('discord.js')

module.exports = {
    name: 'si',
    execute: async (message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor("RANEOM")
        .setAuthor(`${message.guild.name}`, message.guild.iconURL())
        .addField('Owner', `<@${message.guild.ownerID}>`)
        .addField("Roles", `${message.guild.roles.cache.size}`)
        .addField("Emojis", `${message.guild.emojis.cache.size}`)
        .addField("Members", `${message.guild.memberCount}`)
        .addField("Tier", `${message.guild.premiumTier}`)
        .addField('Channels', `Text: ${message.guild.channels.cache.filter(channel => channel.type == 'text').size}`)
        .addField('Server ID:', `${message.guild.id}`)
        message.channel.send(embed)
    }
}