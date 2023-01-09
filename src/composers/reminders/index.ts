import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "src/types/BotContext";
import { addReminder, viewReminders } from "./conversations";

export const remindersComposer = new Composer<BotContext>();

remindersComposer.use(conversations());
remindersComposer.use(createConversation(addReminder));
remindersComposer.use(createConversation(viewReminders));

remindersComposer.hears(/^Добавить напоминание$/, async (ctx) => {
  await ctx.conversation.enter("addReminder");
});

remindersComposer.hears(/^Посмотреть напоминания$/, async (ctx) => {
  await ctx.conversation.enter("viewReminders");
});
