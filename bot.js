const Discord = require('discord.js');
const client = new Discord.Client();

// set what commands are fine
client.on('message', message => {
	
	var messageID = message.channel_id;
    if (message.content !== '!battlemaster' && 
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
  	}
	message.reply(messageID);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
