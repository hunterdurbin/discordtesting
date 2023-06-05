import { CommandInteraction, Client, InteractionType } from "discord.js";
import { Command } from "../Command";

export const FlipCoin: Command = {
    name: "flip",
    description: "Flips a coin",
    type: InteractionType.Ping.valueOf(),
    run: async (client: Client, interaction: CommandInteraction) => {
        const heads = Math.floor(Math.random() * 2) == 1;

        const content = `You flipped ${heads ? "heads" : "tails"}!`;

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
};
