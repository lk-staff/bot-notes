import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "src/types/BotContext";
import { saveIncomeExpense } from "./conversations";

export const incomeExpenseComposer = new Composer<BotContext>();

incomeExpenseComposer.use(conversations());
incomeExpenseComposer.use(createConversation(saveIncomeExpense));

incomeExpenseComposer.hears(/^Ввести доходы-расходы$/, async (ctx) => {
  await ctx.conversation.enter("saveIncomeExpense");
});
