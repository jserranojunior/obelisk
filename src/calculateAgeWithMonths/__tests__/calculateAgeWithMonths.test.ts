import { calculateAgeWithMonths } from "../calculateAgeWithMonths";
describe("calcularIdadeComMeses()", () => {

  test("calculateAgeWithMonths two months ago DATE_TWO_MONTHS (return aways = '0 anos e 2 meses')", () => {    
      const ACTUAL_DATE = new Date()
    const DATE_TWO_MONTHS = new Date(ACTUAL_DATE.setMonth(ACTUAL_DATE.getMonth() - 2)).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_TWO_MONTHS)).toBe("0 anos e 2 meses");
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS (return aways = '1 anos e 2 meses')", () => {
      const ACTUAL_DATE = new Date()
    const DATE_ON_YEAR_TWO_MONTHS = new Date(ACTUAL_DATE.getFullYear() -1, ACTUAL_DATE.getMonth() - 2, ACTUAL_DATE.getDay()).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS)).toBe("1 anos e 2 meses");
  });
    test("calculateAgeWithMonths DATE_ON_YEAR_ONE_MONTHS (return aways = '1 anos e 1 meses')", () => {
      const ACTUAL_DATE = new Date()
    const DATE_ON_YEAR_ONE_MONTHS = new Date(ACTUAL_DATE.getFullYear() -1, ACTUAL_DATE.getMonth() - 1, ACTUAL_DATE.getDay()).toLocaleDateString("fr-ca");
    console.log(DATE_ON_YEAR_ONE_MONTHS)
    expect(calculateAgeWithMonths(DATE_ON_YEAR_ONE_MONTHS)).toBe("1 anos e 1 meses");
  });
    test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS_ONE_DAY (return aways = '1 anos e 2 meses')", () => {
        const ACTUAL_DATE = new Date()
    const DATE_ON_YEAR_TWO_MONTHS_ONE_DAY = new Date(ACTUAL_DATE.getFullYear() -1, ACTUAL_DATE.getMonth() - 2, ACTUAL_DATE.getDay() + 10).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS_ONE_DAY)).toBe("1 anos e 2 meses");
  });
  test("calculateAgeWithMonths DATE_FORTY (return aways = '76 anos e 7 meses')", () => {
    const DATE_FORTY = "1945-08-11";
    expect(calculateAgeWithMonths(DATE_FORTY)).toBe("76 anos e 7 meses");
  });
});
