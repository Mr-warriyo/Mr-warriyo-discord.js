const Discord = require('discord.js');
module.exports = {
	name: 'ban',
	description: 'ban a user.',
	aliases: ['b'],
	usage: '>ban @user#1111 reason',
	cooldown: 3,
	execute(message, args) {
  
     
    
  if (!message.member.hasPermission("BAN_MEMBERS")  && message.author.id !== "621217072541597696") return message.channel.send("Sorry, you don't have permissions to use this!");
                                                                       // Your bot id ↑
  let xdemb = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Ban Command")
  .addField("Description:", `Ban a member`, true)
  .addField("Usage:", " Ban [user] [reason]", true)
  .addField("Example:" ,"Ban @zach spam")

    let member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
      
    if(!member.bannable) 
      return message.channel.send("I cannot ban this user because of my role (it's below his/her)!");
   if(member.user.id === "584684175035203605") return message.channel.send("I can't kick my owner!")
                // Your user id ↑
 
    let reason = args.slice(1).join(' ');
    if(!reason) {
      return message.reply('no reason given')
    }
    
     member.ban({reason})
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));

      let kick = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`Ban | ${member.user.tag}`)
      .addField("User", member, true)
      .addField("Moderator", message.author, true)
      .addField("Reason", reason)
      .setTimestamp()
      .setFooter(member.id)

    message.channel.send(kick)

    }
}
