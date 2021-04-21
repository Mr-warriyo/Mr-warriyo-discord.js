const Discord = require('discord.js')

module.exports = {
    name: 'sudo',
    execute: async (message, args) => {
        if (!args[1]) return message.reply('please provide a message to send')
        const member = message.mentions.members.first()
 if (!member) return message.reply('please tag a user')
 message.channel.createWebhook(member.user.username, {
     avatar: member.user.displayAvatarURL({dynamic: true})
 }).then(webhook => {
     webhook.send(args.slice(1).join(' '))
     setTimeout(() => {
         webhook.delete()        
     }, 3000)
  })
    }
}