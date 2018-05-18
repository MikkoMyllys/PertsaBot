const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    // It's good practice to ignore other bots. This also makes your bot ignore itself
	// and not get into a spam loop (we call that "botception").
	if(message.author.bot) return;
	
	
	// Also good practice to ignore any message that does not start with our prefix, 
	// which is set in the configuration file.
	if(message.content.indexOf("!") !== 0) return;
	
	if(message.content == "!JanneLeipoo"){
		message.channel.send("Mitä se janne leipoo?");
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
