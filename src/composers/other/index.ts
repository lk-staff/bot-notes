import { Composer } from "grammy";
import { conversations, createConversation } from "@grammyjs/conversations";
import { BotContext } from "../../types/BotContext";
import { saveOther } from "./conversations";

export const otherComposer = new Composer<BotContext>();

otherComposer.use(conversations());
otherComposer.use(createConversation(saveOther));

otherComposer.hears(/^Ввести прочее в таблицу$/, async (ctx) => {
  await ctx.conversation.enter("saveOther");
});
