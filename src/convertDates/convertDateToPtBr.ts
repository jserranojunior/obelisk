export function verifyTypeOf(value: string | Date) {
  const TYPEOF_VALUE = typeof value;
  if (value instanceof Date || value.indexOf("T") > 0) {
    return "date";
  } else if (TYPEOF_VALUE === "string" && value.length === 10) {
    return "string";
  }
}
export function verifyLanguageDate(value: string) {
  if (value.includes("/")) {
    return "ptbr";
  } else if (value.includes("-")) {
    return "us";
  }
}
export function checkFormatDate(value: string | Date) {
  if (verifyTypeOf(value) === "string" && typeof value === "string") {
    return verifyLanguageDate(value);
  } else {
    return "js";
  }
}
export function formatDateToJs(dateToFormatInJS: string) {
  if (checkFormatDate(dateToFormatInJS) == "us") {
    const DATE_IN_US = dateToFormatInJS.replace(/-/g, ",");
    const DATE_IN_JS = new Date(DATE_IN_US);
    return DATE_IN_JS;
  } else if (checkFormatDate(dateToFormatInJS) == "ptbr") {
    const dia = dateToFormatInJS.split("/")[0],
      mes = dateToFormatInJS.split("/")[1],
      ano = dateToFormatInJS.split("/")[2];
    const DATE_IN_PTBR =
      ano + "," + ("0" + mes).slice(-2) + "," + ("0" + dia).slice(-2);
    const DATE_IN_JS = new Date(DATE_IN_PTBR);
    return DATE_IN_JS;
  }
}

export function convertDateJstoPtBr(value: Date) {
  const OPTIONS: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(value).toLocaleDateString("pt-BR", OPTIONS);
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

export function dataFormatoBr(value: any) {
  // return all formatation
}
