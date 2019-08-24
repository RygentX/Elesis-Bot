const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return;
	const embed = new Discord.RichEmbed()
	.setColor("#5CDCE6")
	.setDescription(args.join(" "));
	
	message.delete().catch();
	message.channel.send({embed})

}

module.exports.help = {
	name: "says",
	description: "Admin says whatever you type after command in args.",
	usage: "/says [Your text here]"
}