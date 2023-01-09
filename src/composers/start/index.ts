import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "src/types/BotContext";
import { saveSettingsUser } from "./conversations";
import { mainKeyboard } from "./keyboards";

export const startComposer = new Composer<BotContext>();

startComposer.use(conversations());
startComposer.use(createConversation(saveSettingsUser));

startComposer.command("start", async (ctx) => {
  if (ctx.session.timeZone === "" && ctx.session.googleSheetsId === "") {
    await ctx.reply(
      `Привет, ${ctx.from?.username}, вижу ты у нас впервые,  нужно заполнить некотрые данные!`
    );
    await ctx.conversation.enter("saveSettingsUser");
  } else {
    await ctx.reply(
      `Привет, ${ctx.from?.username}, твой бот полностью готов к работе!`,
      { reply_markup: mainKeyboard }
    );
  }
});
