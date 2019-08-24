const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("Kamu tidak bisa menggunakan perintah ini!")
  
  let argsresult;
  let mChannel = message.mentions.channels.first()
  
  message.delete()
  if(mChannel) {
    argsresult = args.slice(1).join(" ")
    mChannel.send(argsresult)
  } else {
    argsresult = args.join(" ")
    message.channel.send(argsresult)
  }

}

module.exports.help = {
	name: "say",
	description: "Bot akan mengatakan apapun yang diketik.",
	usage: "/say [tulis disini tanpa tanda kurung]"
}
