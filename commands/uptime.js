const ms = require("pretty-ms");
const { RichEmbed } = require("discord.js");

module.exports.run = (bot, message, args) => {

    const embed = new RichEmbed()
    .setFooter(`Terakhir dimulai` bot.readyAt)
    .setDescription(ms(bot.uptime))
    .setAuthor(`Uptime`);
    message.channel.send(embed);
}

module.exports.help = {
    name: "uptime",
    aliases: ["awake"],
}
