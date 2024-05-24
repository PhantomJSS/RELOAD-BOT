module.exports =
{
    name: 'flip',

    run: async (client, message) => 
    {
        let rand = Math.floor(Math.random() * coin.length-0.001);

        message.channel.send(`${client.emotes.coin} | **${coin[rand]}**`)
    }
}

const coin =
[
    "It's Heads!",
    "It's Tails!"
]
