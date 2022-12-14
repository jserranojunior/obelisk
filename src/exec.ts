import {
  limitText,
  dateFormatPtbr,
  dateFormatUs,
  dateFormatJs,
  calculateAgeWithMonths,
  validateToken,
} from "./index";

console.log(limitText("Abobora", 3), " : limitText - Return Abo ...");
console.log(dateFormatPtbr("2022-12-13"), " : dateFormatPtbr - 13/12/2022");

const dateForteste = new Date("2022-08-10");
console.log(
  calculateAgeWithMonths("12/12/2021", dateForteste),
  " : calculateAgeWithMonths, 2 meses e 0 dias",
  dateForteste
);

console.log(dateFormatUs(new Date("2022,10,11")), " : dateJstoUs - 2022-10-11");

console.log(
  dateFormatJs("2022-10-11"),
  " : dateUStoJsFull - DateJs 2022,10,11"
);

console.log(validateToken("tokentrue"), " : validateToken - true");
console.log(validateToken(""), " : validateToken - false");
