//Calling the package
var Discord = require('discord.js');
var bot = new Discord.Client();

//Listener Event: Message Recieved (This will run every time a message is received)
bot.on('message', message => {

//Variables
var sender = message.author; //The person who sent the message
var msg = message.content.toUpperCase(); //Takes the message, and makes it all uppercase
var prefix = '!' //The text before the commands, you can set this to what ever you want

//Ping /Pong command
if (msg === prefix + 'PING') {
message.channel.send('Pong') //Sends a message to the channel, with the comtents "Pong!"
 }
//NO/YES command
if (msg === prefix + 'NO') {
message.channel.send('Yes')
}

//Deleting specific messages in a certain channel.
   if (message.channel.id === '362199875435102220') // Checks if the message is in the specific channel 
if ()
});

//Login 
bot.login(process.env.BOT_TOKEN);

//Listener Event: Bot launched
bot.on('ready', () => {
	console.log('Bot launched...') //Runs when the bot is launched

	//You can put code you want here, it will run when you turn on your bot.


