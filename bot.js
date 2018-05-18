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
	
	const roolitChannel = bot.channels.get("id", "446346643445383188");
	if (message.content === 'mitas' && message.guild.channels.find("name", "meemi-komero").name === roolitChannel.name){
		message.reply('Känni pois');
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
