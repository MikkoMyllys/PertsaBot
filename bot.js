const Discord = require('discord.js');
const client = new Discord.Client();

// set what commands are fine
client.on('message', message => {
	
	//var messageID = message.guild.channels.find("name", "roolit");
    /*if (message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' &&
		message.content !== '!battlemaster' &&
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster' && 
		message.content !== '!battlemaster') {
    	message.reply(messageID);
  	}*/
	if (message.content === 'mitas' && message.guild.channels.find("name", "roolit").name === 'roolit'){
		message.reply('Kanni pialle');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
