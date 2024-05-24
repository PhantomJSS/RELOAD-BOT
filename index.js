const { DisTube } = require('distube')
const discord = require('discord.js')
const { ActivityType } = require('discord.js')

const client = new discord.Client({
  intents: [
        "Guilds",
        "GuildMessages",
        "GuildMembers",
        "GuildVoiceStates",
        "MessageContent"
  ]
})

const fs = require('fs')
const config = require('./config.json')
const { SpotifyPlugin } = require('@distube/spotify')
const { SoundCloudPlugin } = require('@distube/soundcloud')
const { YtDlpPlugin } = require('@distube/yt-dlp')

client.config = require('./config.json')

client.Distube = new DisTube(client, 
{
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new SoundCloudPlugin(),
    new YtDlpPlugin()
  ]
})

client.commands = new discord.Collection()
client.emotes = config.emoji

fs.readdir('./commands/', (err, files) => 
{
  const commandFiles = files.filter(f => f.split('.').pop() === 'js')
  commandFiles.forEach(file => 
  {
    const cmd = require(`./commands/${file}`)
    console.log(`Loaded ${file}`)
    client.commands.set(cmd.name, cmd)
  })
})

client.on('ready', () => 
{
  console.log(`${client.user.tag} is online`)

  client.user.setActivity({
    name: `Persona 4 Golden ${client.emotes.game}`,
    type: ActivityType.Playing,
  })
})

client.on('messageCreate', async message => 
{
  if (message.author.bot || !message.guild) return

  const prefix = "r!"

  if (!message.content.startsWith(prefix)) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = client.commands.get(command)

  if (!client.commands.get(command)) return message.channel.send(`${client.emotes.error} | Please enter a valid command`)
  
  if (!cmd) return

  if (cmd.inVoiceChannel && !message.member.voice.channel) 
  {
    return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
  }
  
  try 
  {
    cmd.run(client, message, args)
  } 

  catch (e) 
  {
    console.error(e)
    return message.channel.send(`${client.emotes.error} | Please join a voice channel`)
  }

})

client.Distube.on('playSong', (queue, song) => 
  {
      queue.textChannel.send(`${client.emotes.play} | Now Playing: \`${song.name}\` Requested by: ${song.user}\n Length: 0:00 - \`${song.formattedDuration}\``)
  })

client.Distube.on('addSong', (queue, song) =>
  {
      queue.textChannel.send(`${client.emotes.addSong} | \'${song.name}\' has been added to the queue\n Requested by: ${song.user}`)
  })

client.Distube.on('addList', (queue, playlist) =>
  {
      queue.textChannel.send(`${client.emotes.success} | \`${playlist.name}\` has been added to the queue (${client.emotes.songs} of songs: ${playlist.songs.length})\n Requested by: ${playlist.user}`)
  })

client.Distube.on('searchNoResult', (message, query) =>
  {
      message.channel.send(`${client.emotes.error} | Error: No results were found for \`${query}\``)
  })

client.login("")

client.users.cache.size