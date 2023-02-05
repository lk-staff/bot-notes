import { Composer } from "grammy";
import { BotContext } from "../types/BotContext";
import { startComposer } from "./start";
import { incomeExpenseComposer } from "./incomeExpense";
import { reminderComposer } from "./reminder";
import { otherComposer } from "./other";

export const mainComposer = new Composer<BotContext>();

mainComposer.use(startComposer);
mainComposer.use(incomeExpenseComposer);
mainComposer.use(reminderComposer);
mainComposer.use(otherComposer);
