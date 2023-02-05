import { BotContext } from "../../types/BotContext";
import { BotConversation } from "../../types/BotConversation";
import { saveData } from "../../utils/saveData";

export const saveOther = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply("Введи прочее: ");
  const other = await conversation.form.text();

  if (conversation.session.googleSheetsId !== "") {
    try {
      await saveData(conversation.session.googleSheetsId, {
        type: "Прочее",
        msg: other,
      });
      await ctx.reply("Сохранил, что дальше?");
    } catch (error) {
      await ctx.reply("Что то пошло не так, проверьте id таблицы.");
    }
  } else {
    await ctx.reply("Нужно заполнить id таблицы!");
  }
};
