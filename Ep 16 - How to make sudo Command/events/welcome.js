const Discord = require('discord.js')

module.exports = (client) => {
    const channelid = "775540873630973982"
    
    client.on('guildMemberAdd', (member) => {
        const channel = member.guild.channels.cache.get(channelid)
        channel.send(`${member} has joined the server`)
    })
}