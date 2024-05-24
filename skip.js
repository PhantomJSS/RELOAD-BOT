module.exports = 
{
    name: 'skip',
    inVoiceChannel: true,

    run: async (client, message) => 
    {
      const queue = client.Distube.getQueue(message)

      if (!queue) return message.channel.send(`${client.emotes.error} | The queue is currently empty`)
      
      try 
      {
        const song = await queue.skip()
        message.channel.send(`${client.emotes.skip} Song Has Been Skipped`)
      } 
      catch (e) 
      {
        message.channel.send(`${client.emotes.error} | Error Occurred, Can't Skip Song`)
      }
    }
  }