const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Testing", { type: "PLAYING" });
 
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
