module.exports = 
{
    name: 'resume',
    inVoiceChannel: true,

    run: async (client, message) => 
    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)
      
      if (queue.paused) 
      {
        queue.resume()
        message.channel.send(`${client.emotes.resume} | Music has been resumed`)
      } 

      else 
      {
        message.channel.send(`${client.emotes.error} | The music is already playing`)
      }
    }
  }
