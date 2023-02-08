import internal from "stream";

export function calculateAgeWithMonths(
  value: any,
  dateJsToCompare: Date = new Date()
) {
  const actualDate = dateJsToCompare;
  const ano: number = calculateYearsOfLife(value, actualDate);
  const meses: number = calculateMonthOfLife(value, dateJsToCompare);
  console.log(meses, "meses");

  const IDADE = { ano: ano, mes: meses };

  return formatNameYearsMonth(IDADE);
}
export function calculateYearsOfLife(
  birthToCalculate: string,
  dateJsToCompare: Date
) {
  if (birthToCalculate.length === 10) {
    const birthdate = new Date(birthToCalculate);
    const yearsInt = dateJsToCompare.getTime() - birthdate.getTime();
    const yearsInDate = new Date(yearsInt);
    let yearsOld = Math.abs(yearsInDate.getUTCFullYear() - 1970);
    if (
      compareMonthWithActualDate(birthToCalculate, dateJsToCompare) == "smaller"
    ) {
      yearsOld - 1;
    }
    return yearsOld;
  } else {
    return 0;
  }
}

export function formatNameYearsMonth(idade: { ano: number; mes: number }) {
  let nameMonth = "meses";
  let nameYear = "anos";
  if (idade.mes == 1) {
    nameMonth = "mês";
  }
  if (idade.ano == 1) {
    nameYear = "ano";
  }
  return `${idade.ano} ${nameYear} e ${idade.mes} ${nameMonth}`;
}
export function compareMonthWithActualDate(
  birthToCalculate: string,
  dateJsToCompare: Date
) {
  const birthdate = new Date(birthToCalculate);
  const dateActual = dateJsToCompare;
  const monthActual = dateActual.getMonth();
  const monthBirth = birthdate.getMonth();
  if (monthBirth > monthActual) {
    return "larger";
  } else if (monthBirth < monthActual) {
    return "smaller";
  } else if (monthBirth == monthActual) {
    return "equal";
  }
}
export function calculateMonthOfLife(
  birthToCalculate: string,
  dateJsToCompare: Date
) {
  if (birthToCalculate.length === 10) {
    const birthdate = new Date(birthToCalculate);
    const dateActual = dateJsToCompare;
    const monthActual = dateActual.getMonth();
    const monthBirth = birthdate.getMonth();
    const dayActual = dateActual.getDate();

    const dayBirth = birthdate.getDate() + 1;

    let monthCont = 0;
    let mesesFalta = 0;

    if (
      compareMonthWithActualDate(birthToCalculate, dateJsToCompare) == "larger"
    ) {
      mesesFalta = monthBirth - monthActual;
      monthCont = 12 - mesesFalta;

      console.log(dayBirth, "dayBirth", birthdate, "dayActual", dayActual);

      if (dayBirth > dayActual) {
        monthCont = monthCont - 1;
      }
    } else if (
      compareMonthWithActualDate(birthToCalculate, dateJsToCompare) == "smaller"
    ) {
      mesesFalta = monthActual - monthBirth;
      monthCont = mesesFalta;
    } else if (
      compareMonthWithActualDate(birthToCalculate, dateJsToCompare) == "equal"
    ) {
      if (dayBirth > dayActual) {
        monthCont = 0;
      } else {
        monthCont = 11;
      }
    }

    console.log(monthCont, "monthBirth", birthdate);

    return monthCont;
  } else {
    return 0;
  }
}
