module.exports.run = async (bot, message, args) => {
	let msg = await message.channel.send("Memproses avatar...");
	let target = message.mentions.users.first() || message.author;
	
	await message.channel.send({files: [
	{
		attachment: target.displayAvatarURL,
		name: "Avatar.png"
	}
	]});
	
	msg.delete();
}

module.exports.help = {
	name: "avatar",
	description: "Memperlihatkan foto profil pengguna.",
	usage: "/avatar untuk foto diri sendiri atau /avatar [@USER] untuk melihat foto pengguna lain."
}
