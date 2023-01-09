import { Composer } from "grammy";
import { BotContext } from "src/types/BotContext";
import { startComposer } from "./start";
import { remindersComposer } from "./reminders";
import { incomeExpenseComposer } from "./incomeExpense";

export const mainComposer = new Composer<BotContext>();

mainComposer.use(startComposer);
mainComposer.use(remindersComposer);
mainComposer.use(incomeExpenseComposer);
