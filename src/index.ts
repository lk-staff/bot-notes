import { Bot, session } from "grammy";
import { FileAdapter } from "@grammyjs/storage-file";
import { BotContext } from "./types/BotContext";
import { config } from "./config";

import { mainComposer } from "./composers";
import { authGuard } from "./middlewares/authGuard";

const bot = new Bot<BotContext>(config.BOT_TOKEN);

bot.api.setMyCommands([
  { command: "start", description: "Начать работу с ботом" },
  { command: "settings", description: "Изменить настройки" },
]);

bot.use(authGuard);

function getSessionKey(ctx: BotContext) {
  return ctx.chat?.id.toString();
}

bot.use(
  session({
    initial: () => ({
      counter: 0,
      timeZone: "",
      googleSheetsId: "",
      reminders: [],
      ...getSessionKey,
    }),
    storage: new FileAdapter({
      dirName: "sessions",
    }),
  })
);

bot.hears(/wtf/, async (ctx: BotContext) => {
  await ctx.reply(`googleSheetsId: ${ctx.session.googleSheetsId}`);
  await ctx.reply(`timeZone: ${ctx.session.timeZone}`);
  await ctx.reply(`reminders: ${ctx.session.reminders}`);
  await ctx.reply(`counter: ${ctx.session.counter}`);
});

bot.use(mainComposer);

bot.start({
  onStart: (botInfo) =>
    console.log(
      `Bot launched:\n    id: ${botInfo.id},\n    username: ${botInfo.username}`
    ),
});
