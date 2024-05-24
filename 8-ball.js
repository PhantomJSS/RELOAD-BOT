module.exports = 
{
    name: 'ball',

    run: async (client, message, args) =>
    {
        const question = args.join (' ')

        if (!question) return message.channel.send(`${client.emotes.error} | Please enter a question`)

        let rand = Math.floor(Math.random() * responses.length-0.001);

        message.channel.send(`${client.emotes.ball} | **${responses[rand]}**`)
    }

    
}

const responses = 
[
    "It is certain",
    "Reply hazy, try again",
    "Don’t count on it",
    "It is decidedly so",	
    "Ask again later",	
    "My reply is no",
    "Without a doubt",	
    "Better not tell you now",	
    "My sources say no",
    "Yes definitely",	
    "Cannot predict now",	
    "50/50",
    "You may rely on it",	
    "Concentrate and ask again",	
    "Very doubtful",
    "As I see it, yes",		
    "Most likely",		
    "No",		
    "Yes",		
    "Signs point to yes",
    "Most likely",
    "Absolutely not",
    "I highly doubt it",
    "No way",
    "Definitely not"
]