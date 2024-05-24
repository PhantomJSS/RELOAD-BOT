const { SlashCommanderBuilder, EmbedBuilder } = require('discord.js');

module.exports = 
{
    name: 'animated',
    run: async (client, message) =>

        {
            
        }
    data: new SlashCommanderBuilder()
    .setName('animated-avatar')
    .setDescription('Animate an avatar for your bot')
    .addAttachementOption(option => option.setName('avatar').setDescription('The avatar to animate').setRequired(true)),
    async execute (interaction, client)
    {
        const {options} = interaction;
        const avatar = options.getAttachment('avatar');

        async function sendMessage (message)
        {
            const embed = new EmbedBuilder()
            .setColor("Blurple")
            .setDescription(message)

            await interaction.reply({embeds: [embed], ephemeral: true});
        }

        var error;

        await client.user.setAvatar(avatar.url).catch(async err => {
            error = true;
            console.log(err);
            return await sendMessage(`Error`);
        })
    }
}