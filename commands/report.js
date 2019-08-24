const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(' ');
    let reports = message.guild.channels.find('Nama', config.reportsChannel);

    if (!target) return message.reply('tolong sebutkan anggota untuk dilaporkan!');
    if (!reason) return message.reply('tolong jelaskan alasan untuk laporan ini!');
    if (!reports) return message.reply(`tolong buat saluran bernama ${config.reportsChannel} untuk mencatat laporan!`);

    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(target.user.avatarURL)
        .addField('Nama', `${target.user.username} ID: ${target.user.id}`)
        .addField('Dilaporkan oleh', `${message.author.username} ID: ${message.author.id}`)
        .addField('Dilaporkan pada', message.createdAt)
        .addField('Dilaporkan di', message.channel)
        .addField('Karena', reason)
        .setFooter('Informasi pengguna yang dilaporkan', target.user.displayAvatarURL);

    message.channel.send(`${target} telah dilaporkan oleh ${message.author} karena ${reason}`).then(msg => msg.delete(2000));
    reports.send(embed);

};

module.exports.help = {
    name: 'report'
};
