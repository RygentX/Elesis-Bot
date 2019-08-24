const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You can't use this command!")
  
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
	description: "Client says whatever you type after command in args.",
	usage: "/say [Your text here]"
}