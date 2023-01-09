import { BotContext } from "src/types/BotContext";
import { BotConversation } from "src/types/BotConversation";
import { mainKeyboard } from "./keyboards";

export const saveSettingsUser = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply(`Укажи свой часовой пояс.\nПример: +3`);
  const timeZone = await conversation.form.text();
  await ctx.reply(`Укажи id таблицы в GoogleSheets`);
  const googleSheetsId = await conversation.form.text();

  conversation.session.timeZone = timeZone;
  conversation.session.googleSheetsId = googleSheetsId;

  await ctx.reply(
    `Спасибо, теперь ты можешь смело начать позьзоваться всеми функциями бота!)`,
    { reply_markup: mainKeyboard }
  );
};
