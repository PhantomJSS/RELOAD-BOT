module.exports = 
{
    name: 'repeat',
    inVoiceChannel: true,

    run: async (client, message, args) => 
    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)

      let op = null

      switch (args[0]) 
      {
        case 'off':
          op = 0
          break
        case 'song':
          op = 1
          break
        case 'queue':
          op = 2
          break
      }

      op = queue.setRepeatMode(op)
      op = op ? (op === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
      message.channel.send(`${client.emotes.repeat} | Set repeat mode to \`${op}\``)
    }
  }