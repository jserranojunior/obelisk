import { describe, expect, test } from "vitest";

import { calculateYearsOfLife } from "../calculateAgeWithMonths";
describe("calculateYearsOfLife()", () => {
  const dateRefenceString = "2022-08-10T03:24:00";
  const dateToRef = new Date(dateRefenceString);

  test("For years (return aways = '4')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_FOR_YEARS = new Date(
      dateForTest.setFullYear(dateForTest.getFullYear() - 4)
    ).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_FOR_YEARS, dateToRef)).toBe(4);
  });
  test("My years old(return aways = '29')", () => {
    const dateForTest = new Date(dateRefenceString);
    const MY_DATE_IN = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(MY_DATE_IN, dateToRef)).toBe(29);
  });
  test("Year with +1 month(return aways = '1')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_TWO_YEARS = new Date(
      dateForTest.setFullYear(dateForTest.getFullYear() - 2)
    );
    const DATE_TWO_YEARS_WITH_ONE_MONTH = new Date(
      DATE_TWO_YEARS.setMonth(DATE_TWO_YEARS.getMonth() + 1)
    ).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS_WITH_ONE_MONTH, dateToRef)).toBe(
      1
    );
  });
  test("Year with -1 month(return aways = '2')", () => {
    const dateForTest = new Date(dateRefenceString);
    const DATE_TWO_YEARS = new Date(
      dateForTest.setFullYear(dateForTest.getFullYear() - 2)
    );
    const DATE_TWO_YEARS_WITH_ONE_MONTH = new Date(
      DATE_TWO_YEARS.setMonth(DATE_TWO_YEARS.getMonth() - 1)
    ).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS_WITH_ONE_MONTH, dateToRef)).toBe(
      2
    );
  });
});
