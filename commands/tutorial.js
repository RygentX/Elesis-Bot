const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  return message.channel.send('Halo Dunia!\nSaya Eiza ingin membantu anda');

};

module.exports.help = {
  name: "tutorial"
};