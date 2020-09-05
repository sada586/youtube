const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» Relax-1 yardım Komutları')
.setTimestamp()
.addField('» t!Çal- Müzik Açar', 't!play')
.addField('» t!Devam- Şarkıya Devam Eder', 't!resum ')
.addField('» t!Duraklat- Şarkıyı Durdurur', 't!stop')
.addField('» t!Kapat- Şarkıyı Kapatır', '  t!disconnect')
.addField('» t!Geç- Şarkıyı Geçersiniz', 't!skip')
.setFooter('mustafa yapmıştır ', client.user.avatarURL) 
.addField('» t!afk kalırsınız', 't!afk') 
.addField('» t!etiketlenen kişi banlanır ', 't!ban')
.addField('» t!sunucu kurar', 't!sunucukur')
.addField('» t!log kanalı yapar ', 't!mod-log #kanal')
.addField('» t!botun ping i ni gösterir ', 't!ping')
.addField('» t!mesajları siler ', 't!sil 100')
.addField('» t!oylama yapar ', 't!oylama')
.addField('» t!otosa-as açar ', 't!sa-as')
.addField('» t!ototag ', 't!ototag <tag>')
.addField('» t!otorol ', 't!ototol <@rol>')
.addField('» t!botu bakıma girer yapımcısı için ', 't!bakım')
.setThumbnail(client.user.avatarURL)
return message.channel.send(embed)

};


exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardım','müzik','muzik','mz'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};