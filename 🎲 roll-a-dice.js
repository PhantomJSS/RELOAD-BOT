module.exports =
{
    name: 'roll',

    run: async (client, message) => 
    {
        let rand = Math.floor(Math.random() * dice.length-0.001);

        message.channel.send(`${client.emotes.dice} | **${dice[rand]}**`)
    }
}

const dice =
[
    "The Die Rolled On 1!",
    "The Die Rolled On 2!",
    "The Die Rolled On 3!",
    "The Die Rolled On 4!",
    "The Die Rolled On 5!",
    "The Die Rolled On 6!"
]
