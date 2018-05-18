const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '!MattiLeipoo') {
    	message.reply('...Merviä!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
