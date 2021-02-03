const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Testing", { type: "PLAYING" });
 
});

client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }
 
});

{
    "prefix":"!" 
}



});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);
