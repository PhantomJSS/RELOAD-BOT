module.exports = 
{
    name: 'pause',
    inVoiceChannel: true,

    run: async (client, message) => 
    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)
      
      if (queue.paused) 
      {
        return message.channel.send(`${client.emotes.error} | The music is already paused`)
      }
      
      else
      {
        queue.pause()
        message.channel.send(`${client.emotes.pause} | Music has been paused`)
      }
    }
  }
