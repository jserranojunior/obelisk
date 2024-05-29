import { describe, expect, test } from "vitest";

import { calculateMonthOfLife } from "../calculateAgeWithMonths";
describe("calculateMonthOfLife()", () => {
  const dateRefenceString = "2022-08-10T03:24:00";
  const dateToRef = new Date(dateRefenceString);
  test("For month (return aways = '4')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_FOR_MONTH = new Date(
      dateForTest.getFullYear(),
      dateForTest.getMonth() + 4,
      dateForTest.getDay()
    ).toLocaleDateString("fr-ca");
    expect(calculateMonthOfLife(DATE_FOR_MONTH, dateToRef)).toBe(4);
  });
  test("My age (return aways = '2')", () => {
    const DATE_TWO_MONTH = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(calculateMonthOfLife(DATE_TWO_MONTH, dateToRef)).toBe(2);
  });
  test("Two month (return aways = '6')", () => {
    const DATE_ONE_MONTH = new Date("2023-02-04").toLocaleDateString("fr-ca");
    expect(calculateMonthOfLife(DATE_ONE_MONTH, dateToRef)).toBe(6);
  });
});
