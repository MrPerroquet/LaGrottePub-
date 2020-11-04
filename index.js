const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setActivity('f!help', { type: 'LISTENING'})
})

bot.on('message', function (message) {
	if (message.content === 'f!help') {
		let HelpEmbed = new Discord.MessageEmbed()
		.setDescription("Voici les commandes : **__f!help\nf!langage\nf!status\nf!arouf\nf!membres\nf!ticket\n\nf!publispace\nf!graphiste\nf!venice__**")
		.setColor("#FFFF00")
		.setTitle("Help")
		.setFooter("👍 Footer !")
		
		.setAuthor('La grotte pub')
		message.channel.send(HelpEmbed)
		console.log("f!help")
	}
	
	if (message.content === 'f!membres') {
    	let server_name = message.guild.name
    	let server_size = message.guild.memberCount
    	message.channel.send('Nombre de membres : ' + server_size)
    }

	if (message.content === 'Salut') {
		message.channel.send('Hey')
		message.react('👋')
		
		}

	if(message.content === 'f!langage') {
		message.channel.send('Le bot est codé en JavaScript !')

	}

	if(message.content === 'f!status') {
		message.channel.send('Le bot est En ligne <:discord_online:772405238338158594>')
	}

	if(message.content === 'pk ?') {
		message.channel.send('Parce que')
	}

	if(message.content === 'f!arouf') {
		message.channel.send('Arouf le plus bo https://giphy.com/gifs/YrU1S85ymcQo4CmPyg')
	}

	if (message.content === 'Forge pub help') {
		message.channel.send('Tu as besoin d‘aide ? fait g!help')
	}

	if (message.content === 'f!publispace') {
		message.channel.send(' https://discord.gg/QNaURJPjKH\n(Commande perso gagné)')
		message.react('🤷')
		message.author.send('Pourquoi avoir fait cette commande 🤦')
		}

		if (message.content === 'f!graphiste') {
			message.channel.send('salut 👋 \n• **Tu cherche un logo ou une miniature?**\nAlors viens voir sur ce serveur tu pourra passer des commandes à des graphistes\n• **Tu est graphiste et tu cherche des renders fortnites?**\nLe serveur est remplis de renders que tu pourra utiliser pour tes miniatures\nhttps://discord.gg/WQBrZEY ')
			message.author.send("Rejoin si tu as une envie de logo (c'est une commande perso )")
			message.react('👍')
			}

		if (message.content === 'f!venice') {
			message.channel.send("❓Tu souhaite **faire ta pub & faire monter ton projet en visibilité facilement** ?❓ \n ✅Alors rejoins Venice pub\n 🔗 Le lien : https://discord.gg/6XzayHM")
			message.author.send('Ceci est une commande perso 😇') 
			message.react('😇')
		}

		if(message.content == "<@!725963039630950401>"){
			message.channel.send("Le prefix est :\n**f!** \nN'hésite pas à faire `f!help` pour savoir les commandes ^^")
		}

		if (message.content == "<@!693832416925581332>") {
		message.channel.send("Pourquoi mentione-tu le maître du monde ?! 😤")
		message.react('😤')
	}

		if (message.content === "?j4j") {
			message.channel.send("thx !")
			message.react('♥️')
		}
	
	bot.on("messageReactionAdd", (reaction, user) => {
    if (message.content === "f!ticket)
    if (user.bot) return
    if (reaction.emoji.name == "✅") {
        reaction.message.channel.send('Tu as réagi : ✅');
        reaction.message.guild.channels.create(`ticket de ${user.username}`, {
            type: 'text',
            parent: "ID_DE_LA_CATEGORY",
            permissionOverwrites: [{
                id: reaction.message.guild.id,
                deny: ['SEND_MESSAGES'],
                allow: ['ADD_REACTIONS']
            }]
        }).then(channel_ticket => {
            channel_ticket.send("Channel crée !")
        })
    }
})

		if (message.content === "raid !")
			message.channel.send(" heum , <@693832416925581332> , <@668452729265455111> qlq à prononcer le mot 'raid' !")
		
})

bot.login(process.env.TOKEN)
