import { Client } from "discord.js";
import { Commands } from "../Commands";
import "dotenv/config";

const CONSOLE_LEVEL = parseInt(process.env.CONSOLE_LEVEL || "0")

export default (client: Client): void => {
    client.on("ready", async () => {
        if (!client.user || !client.application) {
            return;
        }
        registerCommands(client)
        console.log(`${client.user.username} is online`);
    });
};

const registerCommands = async (client: Client) => {
  if (!client.application) {
    return;
  }
  try {
    await client.application.commands.set(Commands);
    if (CONSOLE_LEVEL >= 0) console.log("Registered commands") 
    if (CONSOLE_LEVEL >= 1) {
      Commands.map(command => {
        console.log(`Registered command: ${command.name}`)
      })
    }
  } catch (err) {
    if (CONSOLE_LEVEL >= 0) console.error("Could not register commands") 
    if (CONSOLE_LEVEL >= 2) console.error(err)
  }
}
