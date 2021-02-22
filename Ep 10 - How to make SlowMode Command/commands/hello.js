const Discord = require('discord.js')

module.exports = {
    name: 'hi',
    execute: async (message, args) => {
        const embed1 = new Discord.MessageEmbed()
          .setAuthor("Astro Bot", "https://i.imgur.com/ZDLjyv1.jpg")
          .setColor("RANDOM")
          .setTitle("Comamnd")
          .setDescription('Hello')
          .addField("?ping:", 'Tells the ping of bot')
          .setThumbnail("https://i.imgur.com/ZDLjyv1.jpg")
          .setFooter('Astro Bot | Hello Comamnd', 'https://i.imgur.com/ZDLjyv1.jpg')
          .setImage("https://i.imgur.com/ZDLjyv1.jpg")
        message.channel.send(embed1)
    }
}