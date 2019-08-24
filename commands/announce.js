const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return;
	const embed = new Discord.RichEmbed()
	.setDescription(args.join(" "));
	
	message.delete().catch();
	message.channel.send({embed})

}

module.exports.help = {
	name: "announce",
	description: "Bot akan mengirim pengumuman.",
	usage: "/announce [tulis disini tanpa tanda kurung]"
}
