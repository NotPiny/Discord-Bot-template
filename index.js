// |-------------|
// |node index.js|
// |   to start  |
// |-------------|

const { Client, Intents } = require('discord.js')
const client = new Client({
    Intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
    ]
})
require('dotenv/config')

client.on('ready', () => {
    //When bot loads
    console.log(`Logged in as ${client.user.tag}!`);
})

client.on("messageCreate", msg => {
    // msg.content is the content of the message
    // msg.content.toLowerCase() is the content of the message but switched to lower case

    if (msg.content.toLowerCase() === '!hello') {
        // msg.reply replies to the message
        msg.reply(`Hello my name is ${client.user.username}`)
    }
})

client.login(process.env.TOKEN)