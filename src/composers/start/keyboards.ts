import { Keyboard } from "grammy";

export const mainKeyboard = new Keyboard()
  .text("Добавить напоминание")
  .row()
  .text("Ввести доход в таблицу")
  .row()
  .text("Ввести расход в таблицу")
  .row()
  .text("Ввести прочее в таблицу")
  .resized()
  .oneTime(false);
