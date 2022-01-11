import { calculateAgeWithMonths } from "../calculateAgeWithMonths";
describe("calcularIdadeComMeses()", () => {
  test("calculateAgeWithMonths 1993 (return aways = '28 anos e 5 meses')", () => {
    const DATE_THIRTY = "1993-06-10";
    expect(calculateAgeWithMonths(DATE_THIRTY)).toBe("28 anos e 5 meses");
  });
  test("calculateAgeWithMonths 1947 (return aways = '76 anos e 4 meses')", () => {
    const DATE_FORTY = "1945-08-11";
    expect(calculateAgeWithMonths(DATE_FORTY)).toBe("76 anos e 4 meses");
  });
  //  test("calcularIdadeComMeses (return aways = '76 anos e 4 meses')", () => {
  //   const DATE_FIFTY = "1993-06-10";
  //   expect(calcularIdadeComMeses(DATE_FIFTY)).toBe("28 anos e 6 meses");
  // });
});
