module.exports =
{
    name: 'hey',

    run: async (client, message) =>
    {
        message.channel.send(`Hi ${message.author}! ${client.emotes.wave}`)
    }
}
