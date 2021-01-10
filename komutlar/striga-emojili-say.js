const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["737248270497349652"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('#6bffe9').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "683392291615801431"; // Sunucu ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var topuye = message.guild.memberCount.toString().replace(/ /g, "    ")
var üs = topuye.match(/([0-9])/g)
topuye = topuye.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
topuye = topuye.replace(/([0-9])/g, d => {
return {
    '0': `<a:kb0:795659940655005756>`,
    '1': `<a:kb1:795659355180498944>`,
    '2': `<a:kb2:795659979146526760>`,
    '3': `<a:kb3:795660004249436171>`,
    '4': `<a:kb4:795659361242054676>`,                       
    '5': `<a:kb5:795660034000158720>`,
    '6': `<a:kb6:795659361141522442>`,
    '7': `<a:kb7:795659358959697980>`,
    '8': `<a:kb8:795660057424953354>`,
    '9': `<a:kb9:795659360847003689>`}[d];})}
  
var sestekiler = count.toString().replace(/ /g, "    ")
var üs2 = sestekiler.match(/([0-9])/g)
sestekiler = sestekiler.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sestekiler = sestekiler.replace(/([0-9])/g, d => {
return {
  '0': `<a:kb0:795659940655005756>`,
  '1': `<a:kb1:795659355180498944>`,
  '2': `<a:kb2:795659979146526760>`,
  '3': `<a:kb3:795660004249436171>`,
  '4': `<a:kb4:795659361242054676>`,                       
  '5': `<a:kb5:795660034000158720>`,
  '6': `<a:kb6:795659361141522442>`,
  '7': `<a:kb7:795659358959697980>`,
  '8': `<a:kb8:795660057424953354>`,
  '9': `<a:kb9:795659360847003689>`}[d];})}
var taglılar = 0;
let tag = "𐊚";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})

var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
   '0': `<a:kb0:795659940655005756>`,
  '1': `<a:kb1:795659355180498944>`,
  '2': `<a:kb2:795659979146526760>`,
  '3': `<a:kb3:795660004249436171>`,
  '4': `<a:kb4:795659361242054676>`,                       
  '5': `<a:kb5:795660034000158720>`,
  '6': `<a:kb6:795659361141522442>`,
  '7': `<a:kb7:795659358959697980>`,
  '8': `<a:kb8:795660057424953354>`,
  '9': `<a:kb9:795659360847003689>`}[d];})}
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "online").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
      '0': `<a:kb0:795659940655005756>`,
  '1': `<a:kb1:795659355180498944>`,
  '2': `<a:kb2:795659979146526760>`,
  '3': `<a:kb3:795660004249436171>`,
  '4': `<a:kb4:795659361242054676>`,                       
  '5': `<a:kb5:795660034000158720>`,
  '6': `<a:kb6:795659361141522442>`,
  '7': `<a:kb7:795659358959697980>`,
  '8': `<a:kb8:795660057424953354>`,
  '9': `<a:kb9:795659360847003689>`}[d];})}


const say = new Discord.MessageEmbed()
.setColor('#00fff7')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
.setFooter("Say Komutu | Cosmox 💖 Nathan")
.setDescription(`
\`>\` Sunucuda toplam ${topuye} üye bulunmakta.
\`>\` Sunucuda ${cevirimici} aktif üye bulunmakta.
\`>\` Sunucumuda toplam tagımızı alan ${taglılar} üye bulunmakta.
\`>\` Sunucuda sesli sohbetlerde toplam ${sestekiler} üye bulunmakta.`)

msg.channel.send(say);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'say'
}