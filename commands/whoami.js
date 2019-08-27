const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let uicon = message.author.displayAvatarURL;
	let userembed = new Discord.RichEmbed()
	.setAuthor(message.author.tag)
	.setThumbnail(uicon)
	.setColor("#FFE80D")
	.addField("ID", message.author.id, true)
	.addField("Tanggal bergabung Discord", message.author.createdAt, true)
	.addField("Tanggal bergabung Server", message.member.joinedAt, true)
	.addField("Nama panggilan", message.author.nickname || 'None', true)
	
	message.channel.send(userembed);
}

module.exports.help = {
	name: "whoami",
	description: "Kirim informasi tentang Pengguna.",
	usage: "/whoami"
}
