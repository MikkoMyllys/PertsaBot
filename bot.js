const Discord = require('discord.js');
const client = new Discord.Client();

// set what commands are fine
client.on('message', message => {
	
	var messageID = message.guild.channels.find("name", "roolit");
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
	const welcomeChannel = bot.channels.get("name", "meemi-komero")
	welcomeChannel.sendMessage("Welcome\n"+member.user.username);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
