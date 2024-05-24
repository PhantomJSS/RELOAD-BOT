module.exports =
{
    name: 'bye',

    run: async (client, message) =>
    {
        message.channel.send(`Bye ${message.author}! ${client.emotes.bye}`)
    }
}