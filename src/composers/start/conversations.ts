import { BotContext } from "../../types/BotContext";
import { BotConversation } from "../../types/BotConversation";
import { mainKeyboard } from "./keyboards";

export const saveSettingsUser = async (
  conversation: BotConversation,
  ctx: BotContext
) => {
  await ctx.reply(`Укажи id таблицы в GoogleSheets`);
  const googleSheetsId = await conversation.form.text();

  conversation.session.googleSheetsId = googleSheetsId;

  await ctx.reply(
    "Тебе нужно предоставить доступ на этот email: test-service@test-telegram-bot-359708.iam.gserviceaccount.com, и ты сможешь пользоваться всеми функциями бота!",
    { reply_markup: mainKeyboard }
  );
};
