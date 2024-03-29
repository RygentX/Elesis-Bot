const { RichEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let sicon = message.guild.iconURL;
	let serverembed = new RichEmbed()
	.setAuthor(message.guild.name)
	.setThumbnail(sicon)
	.setColor("#FFE80D")
	.addField("ID", message.guild.id, true)
	.addField("Server", message.guild.region.toUpperCase(), true)
	.addField("Tanggal dibuat", message.guild.createdAt, true)
	.addField("Filter eksplisit", message.guild.explicitContentFilter, true)
	.addField("Tingkat verifikasi", message.member.verificationLevel)
	.addField("Pemilik", message.guild.owner.user.tag, true)
	.addField("Anggota", message.guild.memberCount, true)
	.addField("Role", message.guild.roles.size, true)
	.addField("Saluran", message.guild.channels.filter(channel => channel.type !== 'category').size, true)
	
	message.channel.send(serverembed);
}

module.exports.help = {
	name: "server",
	description: "Kirim informasi tentang server saat ini.",
	usage: "/server"
}
