import { describe, expect, test } from "vitest";

import { calculateAgeWithMonths } from "../calculateAgeWithMonths";
describe("calcularIdadeComMeses()", () => {
  test("calculateAgeWithMonths two months ago DATE_TWO_MONTHS (return aways = '0 anos e 2 meses')", () => {
    const dateForTest = new Date();
    const DATE_TWO_MONTHS = new Date(
      dateForTest.getFullYear(),
      dateForTest.getMonth() - 2,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_TWO_MONTHS)).toStrictEqual(
      "0 anos e 2 meses"
    );
  });

  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS (return aways = '1 ano e 1 mês')", () => {
    const dateForTest = new Date();
    const DATE_ON_YEAR_TWO_MONTHS = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 1,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS)).toBe(
      "1 ano e 1 mês"
    );
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS (return aways = '1 ano e 2 meses')", () => {
    const dateForTest = new Date();

    const DATE_ON_YEAR_TWO_MONTHS = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 2,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS)).toBe(
      "1 ano e 2 meses"
    );
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS_ONE_DAY (return aways = '1 anos e 3 meses')", () => {
    const dateForTest = new Date();
    const DATE_ON_YEAR_TWO_MONTHS_ONE_DAY = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 3,
      dateForTest.getDay() + 10
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS_ONE_DAY)).toBe(
      "1 ano e 3 meses"
    );
  });


  test("calculateAgeWithMonths DATE_FORTY IN BRAZILIAN DATE (return aways = '78 anos e 11 meses')", () => {
/*     const DATE_FORTY = "1990-04-21";
 */
     const DATE_FORTY = "21/04/1990";
    expect(calculateAgeWithMonths(DATE_FORTY)).toBe("34 anos e 3 meses");
  });


/*   DATAS FIXAS ABAIXO */

  test("calculateAgeWithMonths DATE_FORTY (return aways = '78 anos e 11 meses')", () => {
    const DATE_FORTY = "1945-08-11";
    expect(calculateAgeWithMonths(DATE_FORTY)).toBe("78 anos e 11 meses");
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '46 anos e 6 meses')", () => {
    const DATE_USER = "1978-01-05";
    expect(calculateAgeWithMonths(DATE_USER)).toBe("46 anos e 6 meses");
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '39 anos e 0 mês')", () => {
    const DATE_USER = "1985-07-18";
    expect(calculateAgeWithMonths(DATE_USER)).toBe("39 anos e 0 meses");
  });

  test("calculateAgeWithMonths DATE_USER (return aways = '74 anos e 2 meses')", () => {
    const DATE_USER = "1950-05-08";
    expect(calculateAgeWithMonths(DATE_USER)).toStrictEqual(
      "74 anos e 2 meses"
    );
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '53 anos e 5 meses')", () => {
    const DATE_USER = "1971-02-03";
    expect(calculateAgeWithMonths(DATE_USER)).toStrictEqual(
      "53 anos e 5 meses"
    );
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '52 anos e 3 meses')", () => {
    const DATE_USER = "1972-04-29";
    expect(calculateAgeWithMonths(DATE_USER)).toStrictEqual(
      "52 anos e 3 meses"
    );
  });
});
