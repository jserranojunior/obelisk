import { calculateMonthOfLife } from "../calculateAgeWithMonths";
describe("calculateMonthOfLife()", () => {
  const ACTUAL_DATE = new Date()
  test("Two month (return aways = '2')", () => {    
    const DATE_TWO_MONTH = new Date(ACTUAL_DATE.setMonth(ACTUAL_DATE.getMonth() + 4)).toLocaleDateString("fr-ca");
    console.log(DATE_TWO_MONTH)
    expect(calculateMonthOfLife(DATE_TWO_MONTH)).toBe(8);
  });
    test("My age (return aways = '2')", () => {    
    const DATE_TWO_MONTH = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(calculateMonthOfLife(DATE_TWO_MONTH)).toBe(9);
  });
      test("One month (return aways = '1')", () => {    
    const DATE_ONE_MONTH = new Date("2022-02-04").toLocaleDateString("fr-ca");
    expect(calculateMonthOfLife(DATE_ONE_MONTH)).toBe(1);
  });
});