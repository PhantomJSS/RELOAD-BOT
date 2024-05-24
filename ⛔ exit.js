module.exports = 
{
    name: 'exit',
    inVoiceChannel: true,

    run: async (client, message) => 
    {
      const queue = client.Distube.getQueue(message)

      queue.stop()
      message.channel.send(`${client.emotes.wave} | Queue has been cleared`)
    }
  }
