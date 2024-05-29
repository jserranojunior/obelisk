import { describe, expect, test } from "vitest";

import { formatNameYearsMonth } from "../calculateAgeWithMonths";
describe("compareMonthWithActualDate()", () => {
  test("ONE_YEAR_LESS (return aways = '1 ano e 0 meses')", () => {
    const IDADE = { ano: 1, mes: 0 };
    expect(formatNameYearsMonth(IDADE)).toBe("1 ano e 0 meses");
  });
  test("ONE_YEAR_LESS_WITH_ONE_MONTH (return aways = '1 ano e 1 mês')", () => {
    const IDADE = { ano: 1, mes: 1 };
    expect(formatNameYearsMonth(IDADE)).toBe("1 ano e 1 mês");
  });
  test("ONE_YEAR_LESS_WITH_TWO_MONTH (return aways = '1 ano e 2 meses')", () => {
    const IDADE = { ano: 1, mes: 2 };
    expect(formatNameYearsMonth(IDADE)).toBe("1 ano e 2 meses");
  });
  test("TWO_YEAR_LESS (return aways = '2 anos e 0 meses')", () => {
    const IDADE = { ano: 2, mes: 0 };
    expect(formatNameYearsMonth(IDADE)).toBe("2 anos e 0 meses");
  });

  test("TWO_YEAR_LESS_WITH_ONE_MONTH (return aways = '2 anos e 1 mês')", () => {
    const IDADE = { ano: 2, mes: 1 };
    expect(formatNameYearsMonth(IDADE)).toBe("2 anos e 1 mês");
  });
  test("TWO_YEAR_LESS_WITH_FIVE_MONTH (return aways = '2 anos e 5 meses')", () => {
    const IDADE = { ano: 2, mes: 5 };
    expect(formatNameYearsMonth(IDADE)).toBe("2 anos e 5 meses");
  });
});
