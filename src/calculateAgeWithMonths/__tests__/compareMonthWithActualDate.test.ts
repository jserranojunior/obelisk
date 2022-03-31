import { compareMonthWithActualDate } from "../calculateAgeWithMonths";
describe("compareMonthWithActualDate()", () => {
  
  test("ONE_MONTH_LESS (return aways = 'smaller')", () => {    
    const ACTUAL_DATE = new Date()
    const ONE_MONTH_LESS = new Date(ACTUAL_DATE.setMonth(ACTUAL_DATE.getMonth() - 2)).toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(ONE_MONTH_LESS)).toBe("smaller");
  });
    test("My age (return aways = 'larger')", () => {    
    const MY_DATE = new Date("1993-06-10").toLocaleDateString("fr-ca");
    expect(compareMonthWithActualDate(MY_DATE)).toBe("larger");
  });
   test("Actual date (return aways = 'equal')", () => {      
     const ACTUAL_DATE = new Date()
     console.log(ACTUAL_DATE.toLocaleDateString("fr-ca"))
    expect(compareMonthWithActualDate(ACTUAL_DATE.toLocaleDateString("fr-ca"))).toBe("equal");
  });
});