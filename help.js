module.exports = 
{
    name: 'help',

    run: async (client, message) =>
    {
        message.channel.send(`${client.emotes.help} | **Commands:**\n
        **Music**\n
        \`${client.emotes.play}\`**r!play**: Play a song via url or query (YT, Spotify, and Soundcloud Support)\n
        \`${client.emotes.pause}\`**r!pause**: Pause the current song\n
        \`${client.emotes.resume}\`**r!resume**: Resume the current song\n
        \`${client.emotes.success}\`**r!remove**: Removes the selected track number (Exp... r!remove 2)\n
        \`${client.emotes.skip}\`**r!skip**: Skip the current song\n
        \`${client.emotes.queue}\`**r!queue**: View the current queue of songs (Max 10 songs allowed at a time)\n
        \`${client.emotes.shuffle}\`**r!shuffle**: Shuffle the current queue of songs\n
        \`${client.emotes.repeat}\`**r!repeat**: Repeat either the current song (r!repeat song), queue (r!repeat queue)\n
        or turn off repeat (r!repeat off), last repeat setting is remembered throughout the session\n
        unless changed\n
        \`${client.emotes.wave}\`**r!exit**: Queue is cleared and music stops\n\n
        **General**\n
        \`${client.emotes.wave}\`**r!hey**: Reload says hi\n
        \`${client.emotes.bye}\`**r!bye**: Reload says bye\n
        \`${client.emotes.ball}\`**r!ball**: Ask Reload-Ball a question (8-Ball Command)\n
        \`${client.emotes.coin}\`**r!flip**: Reload flips a coin for you\n
        \`${client.emotes.dice}\`**r!roll**: Reload rolls a die for you\n
        \`${client.emotes.help}\`**r!help**: Command menu\n\n
        **For other enquiries**: @phantomjs on Discord`)
    }
}
