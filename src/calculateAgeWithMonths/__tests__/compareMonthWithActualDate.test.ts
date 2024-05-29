import { describe, expect, test } from "vitest";

import { compareMonthWithActualDate } from "../calculateAgeWithMonths";
describe("compareMonthWithActualDate()", () => {
  const dateRefenceString = "2022-08-10T03:24:00";
  const dateToRef = new Date(dateRefenceString);

  test("ONE_MONTH_LESS (return aways = 'smaller')", () => {
    const dateForTest = new Date(dateRefenceString);
    const ONE_MONTH_LESS = new Date(
      dateForTest.setMonth(dateForTest.getMonth() - 2)
    ).toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(ONE_MONTH_LESS, dateToRef)).toBe(
      "smaller"
    );
  });
  test("ONE_MONTH_LARGEr (return aways = 'larger')", () => {
    const dateForTest = new Date(dateRefenceString);
    const ONE_MONTH_LESS = new Date(
      dateForTest.setMonth(dateForTest.getMonth() + 2)
    ).toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(ONE_MONTH_LESS, dateToRef)).toBe(
      "larger"
    );
  });
  test("My age (return aways = 'larger')", () => {
    const MY_DATE = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(MY_DATE, dateToRef)).toBe("smaller");
  });
  test("Actual date (return aways = 'equal')", () => {
    const SAME_DATE = new Date(
      dateToRef.getFullYear(),
      dateToRef.getMonth(),
      dateToRef.getDay()
    ).toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(SAME_DATE, dateToRef)).toBe("equal");
  });
});
