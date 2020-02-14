const Discord =require('discord.js');
const bot = new Discord.Client();

const usedCommandRecently = new Set();

const PREFIX = '^'

var version = '1.0.1';

var author = 'Bowl Person'

var jokes = [
    'I added Paul walker on Xbox… But he spends all his time on the dashboard',
    'What did the farmer say after he lost his tractor?  ||-Wheres my tractor?||',
    'Of all the inventions of the last 100 years, the dry erase board has to be the most remarkable.',
    'My buddy drowned the other day. I placed a life jacket in his coffin. It\'s what he would\'ve wanted',
    'What do Abraham Lincoln and an 80s sitcom have in common. ||They were both shot in front of a live audience.||',
    'A neutron walks into a bar and asks the bartender, \"How much for a drink?\" To which the bartender replies,\"For you, no charge\"',
    'Did you know the first French fries weren\'t actually cooked in France? They were cooked in Greece.',
    'What did the laziest man in the world win? ||Atrophy.||',
    'Why don’t blind people like to go skydiving? ||It scares the dog.||',
    'Why do cemetaries have fences? ||Because people are dying to get in there||.',
    'Why does Stephen Hawking only do one-liners?  || Because he can’t do stand up.||',
    'You',
]

bot.on('ready', () =>{
    console.log('this bot is online!');
    bot.user.setActivity('Blonde Boyz', { type: 'LISTENING'}).catch(console.error);
    

});

client.login(process.env.BOT_TOKEN);

bot.on('message',message=>{
  
    let args= message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.reply('Pong!');
           break;
        case 'website':
            message.channel.send('https://www.youtube.com/channel/UCJjS5TwztAliahoRK2gdv8A')    
            break;
            
        case 'joke':
            if (usedCommandRecently.has(message.author.id)){
                message.reply('Sorry. My humor array requires recharging.')
            }else{
                var randomNumber = Math.floor(Math.random() * (jokes.length));
            message.channel.send(jokes[randomNumber]);
                
                usedCommandRecently.add(message.author.id);
                setTimeout(() => {
                usedCommandRecently.delete(message.author.id)
                }, 900000)
            }
            
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error please define a second arg.Thx :kissing_heart: ')
            message.channel.bulkDelete(args[1]);
            break;
        case 'botinfo':
            const embed = new Discord.RichEmbed()
            .setTitle('Bowl-Bot')
            .addField('Verison ', version)
            .addField('Author ', author)
            .addField('Current server',message.guild.name)
            .setColor(0x56FAAA)
            message.channel.sendEmbed(embed);
            break;
            
        
        


    }
})

bot.login(token);