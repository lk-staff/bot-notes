import { BotContext } from "src/types/BotContext";
import { BotConversation } from "src/types/BotConversation";
import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { config } from "../../config";

export const saveIncomeExpense = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply("Введи описание прихода");
  const describeIncome = await conversation.form.text();
  await ctx.reply("Введи сумму прихода (Только число)");
  const amountIncome = await conversation.form.number();
  await ctx.reply("Введи описание расхода");
  const describeExpense = await conversation.form.text();
  await ctx.reply("Введи сумму расхода (Только число)");
  const amountExpense = await conversation.form.number();

  const balanceRub = amountIncome - amountExpense;
  const percentageMargin = Math.round(amountIncome / (balanceRub / 100));

  if (conversation.session.googleSheetsId !== "") {
    try {
      const doc: GoogleSpreadsheet = new GoogleSpreadsheet(
        conversation.session.googleSheetsId
      );

      await doc.useServiceAccountAuth(config.spreadsheet);

      await doc.loadInfo();

      const sheet: GoogleSpreadsheetWorksheet = doc.sheetsByIndex[0];
      await sheet.setHeaderRow([
        "Дата события",
        "Описание прихода",
        "Сумма прихода",
        "Описания расхода",
        "Сумма расхода",
        "Остаток в руб",
        "Маржа в %",
      ]);

      const date = new Date().toLocaleString();

      await sheet.addRow([
        date,
        describeIncome,
        amountIncome,
        describeExpense,
        amountExpense,
        balanceRub,
        percentageMargin,
      ]);

      await ctx.reply("Сохранил, что дальше?");
    } catch (error) {
      await ctx.reply("Что то пошло не так, проверьте id таблицы.");
    }
  } else {
    await ctx.reply("Нужно заполнить id таблицы!");
  }
};
