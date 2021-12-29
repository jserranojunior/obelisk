import { calcularIdadeComMeses } from "../calcularIdadeComMeses";

describe("calcularIdadeComMeses()", () => {
  const DATE_ACTUAL_YEAR = "1993-06-10";

  test("idadeComMeses (return aways = '28 anos e 6 meses')", () => {
    expect(calcularIdadeComMeses(DATE_ACTUAL_YEAR)).toBe("28 anos e 6 meses");
  });
});
