module.exports =
{
    name: 'remove',
    inVoiceChannel: true,

    run : async (client, message, argv) =>
    {
        const queue = client.Distube.getQueue(message)
        const track = argv[0];

        if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)
        if (track == undefined) return message.channel.send(`${client.emotes.error} | Please select a track to remove`)
        if (track == 0) return message.channel.send(`${client.emotes.error} | Can't remove song currently playing`)

        try
        {
            if (track >= queue.songs.length) return message.channel.send(`${client.emotes.error} | Track # is out of the queue's reaches`)

            await queue.songs.splice(track, 1);
            message.channel.send(`${client.emotes.success} | Song Has Been Removed`)
        }
        catch (e)
        {
            message.channel.send(`${client.emotes.error} | Error Occurred, Can't Remove Song`)
        }
    }
}
