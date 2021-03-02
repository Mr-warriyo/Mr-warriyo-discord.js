const Discord = require('discord.js')
const srod = require('srod-v2')

module.exports = {
    name: 'meme',
    description: 'Shows a meme',
    execute: async (message, args) => {
        const meme = await srod.GetMeme()
        message.channel.send(meme)
    }
}