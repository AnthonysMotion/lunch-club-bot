import { config } from 'dotenv'; config(); const TOKEN = process.env.LC_BOT_TOKEN; const CLIENT_ID = process.env.LC_CLIENT_ID; const GUILD_ID = process.env.LC_GUILD_ID;
import { Client, GatewayIntentBits, Routes, EmbedBuilder } from 'discord.js'; import { REST } from '@discordjs/rest';

