import { CommandInteraction, Client, InteractionType } from "discord.js";
import { Command } from "../Command";

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: InteractionType.Ping.valueOf(),
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Hello there!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
