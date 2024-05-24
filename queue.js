module.exports = 
{
    name: 'queue',
    run: async (client, message) => 

    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)

      const q = queue.songs
        .map((song, i) => `${client.emotes.songs} ${i === 0 ? 'Currently Playing:' : `${i}.`} ${song.name} Requested by: ${song.user}\n Length: 0:00 - \`${song.formattedDuration}\``)
        .join('\n')
      message.channel.send(`${client.emotes.queue} | **Server Queue**\n${q}`)
    }
  }