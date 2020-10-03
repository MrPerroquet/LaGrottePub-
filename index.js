const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setActivity('g!help', { type: 'PLAYING' })
})

bot.on('message', function (message) {
	if (message.content === 'g!help') {
		let HelpEmbed = new Discord.MessageEmbed()
		.setDescription("Voici les commandes : **__g!help\ng!langage\ng!status\ng!arouf\ng!love\n\ng!help2\ng!publispace\ng!graphiste\ng!venice__**")
		.setColor("#FFFF00")
		.setTitle("Help")
		.setFooter("👍 Footer !")
		
		.setAuthor('La grotte pub')
		message.channel.send(HelpEmbed)
		console.log("g!help")
	}

	if (message.content === 'Salut') {
		message.channel.send('Hey')
		
		}

	if (message.content === 'pute') {
		message.channel.send('Ok tu es banni <:Ban:718455295298240514>')
		console.log("pute")
	}

	if(message.content === 'g!langage') {
		message.channel.send('Le bot est codé en JavaScript !')

	}

	if(message.content === 'g!status') {
		message.channel.send('Le bot est En ligne <:discord_online:726683941318164522>')
	}

	if(message.content === 'pk ?') {
		message.channel.send('Parce que')
	}

	if(message.content === 'g!arouf') {
		message.channel.send('Arouf le plus bo https://giphy.com/gifs/YrU1S85ymcQo4CmPyg')
	}

	if(message.content === 'g!love') {
		message.channel.send('Voici le serveur que le fondateur aime le PLUS :heartpulse: :heartpulse: https://discord.gg/XFf3cKx')
		message.react('♥️')
	}

	if(message.content === 'g!notre-pub') {
		message.channel.send(' Voici le salon de notre pub <#709450267451588638> et voici celui pour les gens avec un nitro <#727143653356732416>')
	}

	if(message.content === 'g!help2') {
		message.channel.send('Le bot n‘est que visuel (pour l‘instant)')
	}

	if (message.content === 'La grotte pub help') {
		message.channel.send('Tu as besoin d‘aide ? fait g!help')
	}

	if (message.content === 'g!publispace') {
		message.channel.send(' https://discord.gg/PpQeN3Q\n(Commande perso gagné)')
		message.react('🤷')
		message.author.send('Pourquoi avoir fait cette commande 🤦')
		}

		if (message.content === 'g!graphiste') {
			message.channel.send('salut 👋 \n• **Tu cherche un logo ou une miniature?**\nAlors viens voir sur ce serveur tu pourra passer des commandes à des graphistes\n• **Tu est graphiste et tu cherche des renders fortnites?**\nLe serveur est remplis de renders que tu pourra utiliser pour tes miniatures\nhttps://discord.gg/WQBrZEY ')
			message.author.send("Rejoin si tu as une envie de logo (c'est une commande perso )")
			message.react('👍')
			}

		if (message.content === 'g!venice') {
			message.channel.send("❓Tu souhaite **faire ta pub & faire monter ton projet en visibilité facilement** ?❓ \n ✅Alors rejoins Venice pub\n 🔗 Le lien : https://discord.gg/6XzayHM")
			message.author.send('Ceci est une commande perso 😇') 
			message.react('😇')
		}

		if(message.content == "<@!725963039630950401>"){
			message.channel.send("Le prefix est :\n**g!** \nN'hésite pas à faire `g!help` pour savoir les commandes ^^")
		}

		if (message.content == "<@!693832416925581332>") {
		message.channel.send("Pourquoi mentione-tu le maître du monde ?! 😤")
		message.react('😤')
	}
	
	if(message.content === 'halllloween') {
		message.channel.send('🎃🎃Viens voir ce serveur 🎃🎃 : \n https://discord.gg/AXZRYTx ')
	}

		if (message.content === "?j4j") {
			message.channel.send("thx !")
			message.react('♥️')
		}

		if (message.content === "raid !")
			message.channel.send(" heum , <@693832416925581332> , <@679702193875451914> , <@668452729265455111> qlq à prononcer le mot 'raid' !")
		
})

bot.login(process.env.TOKEN)
