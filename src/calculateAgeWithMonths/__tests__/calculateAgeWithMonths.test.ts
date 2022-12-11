import { describe, expect, test } from "vitest";

import { calculateAgeWithMonths } from "../calculateAgeWithMonths";
describe("calcularIdadeComMeses()", () => {
  const dateRefenceString = "2022-08-10T03:24:00";
  const dateToRef = new Date(dateRefenceString);
  test("calculateAgeWithMonths two months ago DATE_TWO_MONTHS (return aways = '0 anos e 2 meses')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_TWO_MONTHS = new Date(
      dateForTest.getFullYear(),
      dateForTest.getMonth() - 2,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_TWO_MONTHS, dateToRef)).toBe(
      "0 anos e 2 meses"
    );
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS (return aways = '1 ano e 1 mês')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_ON_YEAR_TWO_MONTHS = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 1,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS, dateToRef)).toBe(
      "1 ano e 1 mês"
    );
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS (return aways = '1 ano e 2 meses')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_ON_YEAR_TWO_MONTHS = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 2,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS, dateToRef)).toBe(
      "1 ano e 2 meses"
    );
  });
  test("calculateAgeWithMonths DATE_ON_YEAR_TWO_MONTHS_ONE_DAY (return aways = '1 anos e 3 meses')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_ON_YEAR_TWO_MONTHS_ONE_DAY = new Date(
      dateForTest.getFullYear() - 1,
      dateForTest.getMonth() - 3,
      dateForTest.getDay() + 10
    ).toLocaleDateString("fr-ca");
    expect(
      calculateAgeWithMonths(DATE_ON_YEAR_TWO_MONTHS_ONE_DAY, dateToRef)
    ).toBe("1 ano e 3 meses");
  });
  test("calculateAgeWithMonths DATE_FORTY (return aways = '76 anos e 11 meses')", () => {
    const DATE_FORTY = "1945-08-11";
    expect(calculateAgeWithMonths(DATE_FORTY, dateToRef)).toBe(
      "76 anos e 11 meses"
    );
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '44 anos e 7 meses')", () => {
    const DATE_USER = "1978-01-05";
    expect(calculateAgeWithMonths(DATE_USER, dateToRef)).toBe(
      "44 anos e 7 meses"
    );
  });
  test("calculateAgeWithMonths DATE_USER (return aways = '37 anos e 1 mês')", () => {
    const DATE_USER = "1985-07-18";
    expect(calculateAgeWithMonths(DATE_USER, dateToRef)).toBe(
      "37 anos e 1 mês"
    );
  });
});
