const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Siapa ini yang bukan admin memberikan perintah kepada saya?");
	if(!args[0]) return message.channel.send("Berikan jumlah pesan yang ingin dihapus");
	message.channel.bulkDelete(args[0]).then(() => {
		message.channel.send(`${args[0]} pesan telah dihapus.`).then(msg => msg.delete(2000));
	});

}

module.exports.help = {
	name: "clear",
	description: "Menghapus pesan dari saluran saat ini.",
	usage: "/clear [number]"
}
