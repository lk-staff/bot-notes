import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "../../types/BotContext";
import { saveIncome, saveExpense } from "./conversations";

export const incomeExpenseComposer = new Composer<BotContext>();

incomeExpenseComposer.use(conversations());
incomeExpenseComposer.use(createConversation(saveIncome));
incomeExpenseComposer.use(createConversation(saveExpense));

incomeExpenseComposer.hears(/^Ввести доход в таблицу$/, async (ctx) => {
  await ctx.conversation.enter("saveIncome");
});

incomeExpenseComposer.hears(/^Ввести расход в таблицу$/, async (ctx) => {
  await ctx.conversation.enter("saveExpense");
});
