module.exports = 
{
    name: 'play',
    inVoiceChannel: true,
    
    run: async (client, message, args) => 
    {
      const song = args.join(' ')

      if (!song) return message.channel.send(`${client.emotes.error} | Please enter a song/playlist url or query`)

      client.Distube.play(message.member.voice.channel, song, 
      {
          member: message.member,
          textChannel: message.channel,
          message
      })

    }
}
  