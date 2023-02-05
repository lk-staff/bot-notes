import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "../../types/BotContext";
import { saveReminder } from "./conversations";

export const reminderComposer = new Composer<BotContext>();

reminderComposer.use(conversations());
reminderComposer.use(createConversation(saveReminder));

reminderComposer.hears(/^Добавить напоминание$/, async (ctx) => {
  await ctx.conversation.enter("saveReminder");
});
