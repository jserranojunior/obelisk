import { calculateYearsOfLife } from "../calculateAgeWithMonths";
describe("calculateYearsOfLife()", () => {
 
  test("Two years (return aways = '4')", () => {    
     const ACTUAL_DATE = new Date()
    const DATE_TWO_YEARS = new Date(ACTUAL_DATE.setFullYear(ACTUAL_DATE.getFullYear() - 4)).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS)).toBe(4);
  });
  test("My years old(return aways = '28')", () => {    
    const DATE_TWO_YEARS = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS)).toBe(28);
  });
    test("Year with +1 month(return aways = '1')", () => {    
    const ACTUAL_DATE = new Date()
    const DATE_TWO_YEARS = new Date(ACTUAL_DATE.setFullYear(ACTUAL_DATE.getFullYear() - 2));
    const DATE_TWO_YEARS_WITH_ONE_MONTH = new Date(DATE_TWO_YEARS.setMonth(DATE_TWO_YEARS.getMonth() + 1)).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS_WITH_ONE_MONTH)).toBe(1);
  });
      test("Year with -1 month(return aways = '2')", () => {    
    const ACTUAL_DATE = new Date()
    const DATE_TWO_YEARS = new Date(ACTUAL_DATE.setFullYear(ACTUAL_DATE.getFullYear() - 2));
    const DATE_TWO_YEARS_WITH_ONE_MONTH = new Date(DATE_TWO_YEARS.setMonth(DATE_TWO_YEARS.getMonth() - 1)).toLocaleDateString("fr-ca");
    expect(calculateYearsOfLife(DATE_TWO_YEARS_WITH_ONE_MONTH)).toBe(2);
  });
});