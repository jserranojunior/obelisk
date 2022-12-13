import {
  limitText,
  dateFormatPtbr,
  calculateAgeWithMonths,
  dateJstoUs,
  dateUStoJsFull,
  validateToken,
} from "./index";

console.log(limitText("Abobora", 3), " : limitText - Return Abo ...");
console.log(dateFormatPtbr("2022-12-13"), " : dateFormatPtbr - 13/12/2022");

console.log(" ######### erro abaixo");

const dateForteste = new Date("2022,10,10");
console.error(
  calculateAgeWithMonths(new Date("2022,12,12"), dateForteste),
  "calculateAgeWithMonths, 2 meses e 0 dias"
);

console.log(dateJstoUs(new Date("2022,10,11")), " : dateJstoUs - 2022-10-11");

console.log(
  dateUStoJsFull("2022-10-11"),
  " : dateUStoJsFull - DateJs 2022,10,11"
);

console.log(validateToken("tokentrue"), " : validateToken - true");
console.log(validateToken(""), " : validateToken - false");
