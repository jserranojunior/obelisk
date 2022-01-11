import { formatDateToJs } from "../js/convertDateToJs";

export function convertDateJstoPtBr(value: Date) {
  const OPTIONS: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(value).toLocaleDateString("pt-BR", OPTIONS);
}

export function dateFormatPtbr(value: string | Date) {
  const DATEINJS: any = formatDateToJs(value);
  const DATEINPTBR = convertDateJstoPtBr(DATEINJS);
  return DATEINPTBR;
}

// export function convertDateUstoPtBr(data: any) {
//   if (data) {
//     var dia = data.split("-")[2];
//     var mes = data.split("-")[1];
//     var ano = data.split("-")[0];
//     return ("0" + dia).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;
//   }
// }

// export function convertDateJstoPtBr(value: any) {
//   var d = new Date(value),
//     month = "" + (d.getMonth() + 1),
//     day = "" + d.getDate(),
//     year = d.getFullYear();

//   if (month.length < 2) month = "0" + month;
//   if (day.length < 2) day = "0" + day;

//   return [day, month, year].join("/");
// }
