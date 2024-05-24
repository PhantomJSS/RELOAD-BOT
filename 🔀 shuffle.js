module.exports = 
{
    name: 'shuffle',
    inVoiceChannel: true,

    run: async (client, message) => 
    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)
      
      queue.shuffle()
      
      message.channel.send(`${client.emotes.shuffle} | Songs have been shuffled`)
    }
  }
