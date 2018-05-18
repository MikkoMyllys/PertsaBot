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
	
	// 446717892050944001 = #roolit, pidetään puhtaana
	if (message.channel.id === '446717892050944001'){
		message.delete().catch(O_o=>{}); 
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
