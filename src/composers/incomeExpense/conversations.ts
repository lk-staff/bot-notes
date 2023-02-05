import { BotContext } from "../../types/BotContext";
import { BotConversation } from "../../types/BotConversation";
import { saveData } from "../../utils/saveData";

export const saveIncome = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply("Введи доход: ");
  const income = await conversation.form.text();

  if (conversation.session.googleSheetsId !== "") {
    try {
      await saveData(conversation.session.googleSheetsId, {
        type: "Доход",
        msg: income,
      });
      await ctx.reply("Сохранил, что дальше?");
    } catch (error) {
      await ctx.reply("Что то пошло не так, проверьте id таблицы.");
    }
  } else {
    await ctx.reply("Нужно заполнить id таблицы!");
  }
};

export const saveExpense = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply("Введи расход: ");
  const expense = await conversation.form.text();

  if (conversation.session.googleSheetsId !== "") {
    try {
      await saveData(conversation.session.googleSheetsId, {
        type: "Расход",
        msg: expense,
      });
      await ctx.reply("Сохранил, что дальше?");
    } catch (error) {
      await ctx.reply("Что то пошло не так, проверьте id таблицы.");
    }
  } else {
    await ctx.reply("Нужно заполнить id таблицы!");
  }
};
