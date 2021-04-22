const srod = require('srod-v2')
const Discord = require('discord.js')
const color = "RANDOM"

module.exports = {
    name: 'wasted',
    execute: async (message, args) => {
        const user = message.mentions.users.first()
        if (!user) {
            return message.reply('Please Tag a Valid User')
        }
        const Data = await srod.Wasted({Image: user.displayAvatarURL({dynamic: 'true', format: 'png'}), Color: color})
   message.channel.send(Data)
    }
}