import { calcularIdadeComMeses } from "../calcularIdadeComMeses";
describe("calcularIdadeComMeses()", () => {
  test("calcularIdadeComMeses 1993 (return aways = '28 anos e 6 meses')", () => {
    const DATE_THIRTY = "1993-06-10";
    expect(calcularIdadeComMeses(DATE_THIRTY)).toBe("28 anos e 6 meses");
  });
  test("calcularIdadeComMeses 1947 (return aways = '76 anos e 4 meses')", () => {
    const DATE_FORTY = "1945-08-11";
    expect(calcularIdadeComMeses(DATE_FORTY)).toBe("76 anos e 4 meses");
  });
  //  test("calcularIdadeComMeses (return aways = '76 anos e 4 meses')", () => {
  //   const DATE_FIFTY = "1993-06-10";
  //   expect(calcularIdadeComMeses(DATE_FIFTY)).toBe("28 anos e 6 meses");
  // });
});
