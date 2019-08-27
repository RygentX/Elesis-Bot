const { RichEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {

    const embed = new RichEmbed()
    .setColor("#FFE80D")
    .setDescription(`Ping! ${bot.ping} ms`)
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "ping",
    description: "Kirim waktu ping untuk bot.",
	usage: "/ping "
}
