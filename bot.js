const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');

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
		//PÄIVÄN VIHANNES
		if (message.content.toLowerCase() === '!päivänvihannes'){
			var vihannesIndex = Math.floor((Math.random() * vihannekset.length));
			if (vihannekset[vihannesIndex] === 'pizzaa'){
				message.channel.send( message.author.username + ' syö vihanneksista parhainta eli ' + vihannekset[vihannesIndex]);
			}
			else {
				message.channel.send( message.author.username + ' syö ' + vihannekset[vihannesIndex]);
			}
		}
		
		//HTTP REQUEST
		/*var url = 'https://api.icndb.com/jokes/random?firstName=' + message.author.username + '&amp;lastName=jassoo';
		
		https.get(url, (resp) => {
		  let data = '';
		 
		  // A chunk of data has been recieved.
		  resp.on('data', (chunk) => {
			data += chunk;
		  });
		 
		  // The whole response has been received. Print out the result.
		  resp.on('end', () => {
			var obj = JSON.parse(data);
			message.reply(obj.value.joke);
		  });
		 
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
		});*/
	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
