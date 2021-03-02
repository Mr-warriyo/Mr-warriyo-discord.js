const Discord = require('discord.js')

module.exports = {
    name: 'say',
    execute: async (message, args) => {
        const sayMessage = args.join(" ")
        message.channel.send(`${sayMessage}`)
    }
} // >say 'hello'
// hello