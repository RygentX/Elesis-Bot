const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	let sicon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setAuthor(message.guild.name)
	.setColor("#5CDCE6")
	.setThumbnail(sicon)
	.addField("ID", message.guild.id, true)
	.addField("Server", message.guild.region.toUpperCase(), true)
	.addField("Creation Date", message.guild.createdAt, true)
	.addField("Explicit Filter", message.guild.explicitContentFilter, true)
	.addField("Verification Level", message.member.verificationLevel)
	.addField("Owner", message.guild.owner.user.tag, true)
	.addField("Member", message.guild.memberCount, true)
	.addField("Role", message.guild.roles.size, true)
	.addField("Channel", message.guild.channels.filter(channel => channel.type !== 'category').size, true)
	
	message.channel.send(serverembed);
}

module.exports.help = {
	name: "server",
	description: "Send information about the current server.",
	usage: "/server"
}