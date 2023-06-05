import { Client, ClientOptions } from "discord.js";
import ready from "./listeners/ready";
import "dotenv/config";
import interactionCreate from "./listeners/interactionCreate";

const token = process.env.TOKEN;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client)
interactionCreate(client)

client.login(token)
