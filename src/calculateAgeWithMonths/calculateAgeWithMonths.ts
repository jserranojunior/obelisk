export function calculateAgeWithMonths(value: any) {
  const ano = calculateYearsOfLife(value);
  const meses = calculateMonthOfLife(value);
  return `${ano} anos e ${meses} meses`;
}
export function calculateYearsOfLife(birthToCalculate: string) {
  if (birthToCalculate.length === 10) {
    const birthdate = new Date(birthToCalculate);
    const yearsInt= Date.now() - birthdate.getTime();
    const yearsInDate = new Date(yearsInt);
    let yearsOld = Math.abs(yearsInDate.getUTCFullYear() - 1970);
    if (compareMonthWithActualDate(birthToCalculate) == "smaller") {
      yearsOld - 1
    }
    return yearsOld;
  }
}
export function compareMonthWithActualDate(birthToCalculate: string){
      const birthdate = new Date(birthToCalculate);
      const dateActual = new Date();
      const monthActual = dateActual.getMonth()
      const monthBirth = birthdate.getMonth();
      if (monthBirth > monthActual) {
        return "larger"
      }
        else if(monthBirth < monthActual) {
          return "smaller"
        }
        else if(monthBirth == monthActual) {
          return "equal"
        }
}
export function calculateMonthOfLife(birthToCalculate: string) {
  if (birthToCalculate.length === 10) {
    const birthdate = new Date(birthToCalculate);
    const dateActual = new Date();
    const monthActual = dateActual.getMonth()
        const monthBirth = birthdate.getMonth();
    const dayActual = dateActual.getDate();

    const dayBirth = birthdate.getDate();

    let monthCont = 0;
    let mesesFalta = 0;

    if (compareMonthWithActualDate(birthToCalculate) == "larger") {
      mesesFalta = monthBirth - monthActual;
      monthCont = 12 - mesesFalta;
    }else  if (compareMonthWithActualDate(birthToCalculate) == "smaller") {
      mesesFalta = monthActual - monthBirth;
      monthCont = mesesFalta
    } else  if (compareMonthWithActualDate(birthToCalculate) == "equal") {
      monthCont = 0;
      if (dayBirth > dayActual) {
      monthCont = monthCont + 1;
      }
    }
    return monthCont;
  }
}
// 08 > 07
// 06 - 7 = 1

