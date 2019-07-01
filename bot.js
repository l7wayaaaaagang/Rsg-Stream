const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Coding Time`,"http://twitch.tv/DeathRules")// DeathRules
client.user.setStatus("dnd")// DeathRules
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
