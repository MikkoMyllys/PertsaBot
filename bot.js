const Discord = require('discord.js');
const client = new Discord.Client();

var vihannekset = [
	'bataattia', 'kaurajuurta', 'lanttua', 'maa-artisokkaa', 'mustajuurta', 'naurista', 'palsternakkaa', 'persiljaa', 
	'perunaa', 'piparjuurta', 'porkkanaa', 'punajuurikasta', 'retiisiä', 'selleriä', 'vesikastanjaa', 'endiiviä',
	'euroopanmerikaalia', 'fenkolia', 'keräkaalia', 'kiinankaalia', 'kurttukaalia', 'kyssäkaalia', 'pizzaa', 'lehtikaalia',
	'punakaalia', 'ruusukaalia', 'kardonia', 'keltasipulia', 'lamopinaattia', 'lehtimangoldia', 'persiljaa', 'pillisipulia',
	'pinaattia', 'purjoa', 'raparperia', 'ruoholaukkaa', 'ruokaparsaa', 'selleriä', 'sinappikaalia', 'vesikrassia', 'herneitä',
	'härkäpapuja', 'jättikurpitsaa', 'kurkkua', 'kurpitsaa', 'spagettikurpitsaa', 'latva-artisokkaa', 'maissia', 'munakoisoa', 
	'okraa', 'paprikaa', 'parsahernettä', 'tarhapapua', 'tomaattia'
];

// set what commands are fine
client.on('message', message => {
	
	// 446717892050944001 = #roolit, pidetään puhtaana
	if (message.channel.id === '446717892050944001'){
		message.delete().catch(O_o=>{}); 
	}
	
	// 446346643445383188 = #meemi-komero ja 446338195462815774 = #yleinen-keskustelu
	if (message.channel.id === '446346643445383188' || message.channel.id === '446338195462815774'){
		if (message.content.toLowerCase() === '!päivänvihannes'){
			var vihannesIndex = Math.floor((Math.random() * vihannekset.length));
			if (vihannekset[vihannesIndex] === 'pizzaa'){
				message.channel.send( message.author.username + ' syö vihanneksista parhainta eli ' + vihannekset[vihannesIndex]);
			}
			else {
				message.channel.send( message.author.username + ' syö ' + vihannekset[vihannesIndex]);
			}
		}
	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
