import { Keyboard } from "grammy";

export const mainKeyboard = new Keyboard()
  .text("Добавить напоминание")
  .row()
  .text("Посмотреть напоминания")
  .row()
  .text("Ввести доходы-расходы")
  .resized()
  .oneTime(false);
