import {
  GoogleSpreadsheet,
  GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import moment from "moment";
import { config } from "../config";

interface IData {
  type: "Напоминание" | "Расход" | "Доход" | "Прочее";
  msg: string;
}

export const saveData = async (googleSheetsId: string, data: IData) => {
  const doc: GoogleSpreadsheet = new GoogleSpreadsheet(googleSheetsId);

  await doc.useServiceAccountAuth(config.spreadsheet);

  await doc.loadInfo();

  const sheet: GoogleSpreadsheetWorksheet = doc.sheetsByIndex[0];

  await sheet.setHeaderRow(["Дата и время", "Тип", "Текст сообщения"]);

  const date = moment(new Date()).format("DD.MM.YYYY hh:mm");

  await sheet.addRow([date, data.type, data.msg]);
};
