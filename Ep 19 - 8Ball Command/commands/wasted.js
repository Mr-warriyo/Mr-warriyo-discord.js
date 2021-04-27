const color = "RANDOM"
const srod = require('srod-v2')
const Discord = require('discord.js')

module.exports = {
    name: 'wasted',
    description: 'Wasted Comamnd',
    execute: async (message, args) => {
        const user = message.mentions.users.first() || message.client.users.cache.get(args[0])
   if (!user) {
     return  message.reply('Please Tag a valid user')
   }
   const Data = await srod.Wasted({ Image: user.displayAvatarURL({ dynamic: "true", size: 1024, format: "png"}), Color: color})
   
   message.channel.send(Data)
    }
}