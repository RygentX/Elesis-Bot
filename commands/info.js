const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let bicon = bot.user.displayAvatarURL;
	let botembed = new Discord.RichEmbed()
	.setColor("#FFE80D")
	.setAuthor(bot.user.tag)
	.setThumbnail(bicon)
	.addField("ID", bot.user.id, true)
	.addField("Tanggal bergabung Discord", bot.user.createdAt, true)
	.addField("Nama panggilan", bot.user.nickname || 'Tidak ada', true)
	
	message.channel.send(botembed);
}

module.exports.help = {
	name: "info",
	description: "Kirim informasi tentang bot.",
	usage: "/info"
}
