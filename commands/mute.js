const Discord = require("discord.js");
const ms = require("ms");
const config = require("../config.json");
const red = config.red;
const green = config.green;
const orange = config.orange;

module.exports.run = async (bot, message, args) => {
	
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Anda tidak memiliki izin untuk menggunakan perintah ini!");
	if(args[0] == "help"){
		message.reply("Usage: /mute [@USER] [TIME] [REASON]");
		return;
	}
	let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(!tomute) return message.reply("Tidak dapat menemukan pengguna.");
	if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Tidak bisa dibisu mereka!");
	let reason = args.slice(2).join(" ");
	if(!reason) return message.reply("Harap berikan alasannya.");
	
	let muterole = message.guild.roles.find(`name`, "Muted");
	
	if(!muterole){
		try{
			muterole = await message.guild.createRole({
				name: "Muted",
				color: "#000000",
				permissions:[]
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
				});
			});
		}catch(e){
			console.log(e.stack);
		}
	}
	
	let mutetime = args[1];
	if(!mutetime) return message.reply("Anda tidak menentukan waktu!");
	
	message.delete().catch(O_o=>{});
	
	try{
		await tomute.send(`Anda telah dibisu selama ${mutetime}.`)
	}catch(e){
		message.channel.send(`Seorang pengguna telah dibisukan. tetapi DM mereka dikunci. Mereka akan dibisukan selama ${mutetime}`)
	}
	
	let muteembed = new Discord.RichEmbed()
	.setDescription(`Mute executed by ${message.author}`)
	.setColor(orange)
	.addField("Muted User", tomute)
	.addField("Muted in", message.channel)
	.addField("Time", message.createdAt)
	.addField("Length", mutetime)
	.addField("Reason", reason);
	
	let incidentschannel = message.guild.channels.find(`name`, "report");
	if(!incidentschannel) return message.reply("Harap buat saluran laporan terlebih dahulu!");
	incidentschannel.send(muteembed);
	
	await(tomute.addRole(muterole.id));
	
	setTimeout(function(){
		tomute.removeRole(muterole.id);
		message.channel.send(`<@${tomute.id}> telah dibunyikan!`);
	}, ms(mutetime));
	
}

module.exports.help = {
	name: "mute",
	description: "Memberi peran yang dibisukan pengguna yang akan menghentikan mereka mengetikkan obrolan",
	usage: "/mute [@USER] [TIME] [REASON]"
}
