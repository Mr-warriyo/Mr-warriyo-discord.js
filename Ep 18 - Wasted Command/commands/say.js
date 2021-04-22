const Discord = require('discord.js')

module.exports = {
    name: 'grole',
    execute: async (message, args)  => { 
if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply("You don't have the manage_roles perms")
    const role = message.mentions.roles.first() 
    const member = message.mentions.members.first()
    member.roles.add(role)
    const embed1 = new Discord.MessageEmbed()
    .setTitle("Give role+")
    .setDescription("The role" + message.mentions.roles.first() + "has been given to" `${member.username}`)
    .addField("Moderator Command", "please if you not a moderator pls don't try to use this command♡", true)
    .setColor("#FF005B")
    .setTimestamp()
    .setFooter("role has been given")
    
      message.channel.send(embed1)
    }
}