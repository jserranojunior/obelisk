export function dateUStoJsFull(value: any) {
  if (value) {
    const data = value.replace(/-/g, ",");
    const date = new Date(data);
    return date;
  } else {
    return value;
  }
}

export function dateUStoJs(value: any) {
  if (value) {
    const data = value.replace(/-/g, ",");
    const date = new Date(data);
    return (
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear()
    );
  } else {
    return value;
  }
}

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

export function dateFormatJs(dateToFormatInJS: string | Date) {
  if (
    checkFormatDate(dateToFormatInJS) === "us" &&
    typeof dateToFormatInJS === "string"
  ) {
    const DATE_IN_US = dateToFormatInJS.replace(/-/g, ",");
    const DATE_IN_JS = new Date(DATE_IN_US);
    return DATE_IN_JS;
  } else if (
    checkFormatDate(dateToFormatInJS) === "ptbr" &&
    typeof dateToFormatInJS === "string"
  ) {
    const dia = dateToFormatInJS.split("/")[0];
    const mes = dateToFormatInJS.split("/")[1];
    const ano = dateToFormatInJS.split("/")[2];
    const DATE_IN_PTBR =
      ano + "," + ("0" + mes).slice(-2) + "," + ("0" + dia).slice(-2);
    const DATE_IN_JS = new Date(DATE_IN_PTBR);
    return DATE_IN_JS;
  } else if (checkFormatDate(dateToFormatInJS) === "js") {
    return dateToFormatInJS;
  }
}
