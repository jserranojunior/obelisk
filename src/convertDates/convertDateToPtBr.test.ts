import {
  verifyTypeOf,
  verifyLanguageDate,
  checkFormatDate,
  formatDateToJs,
  convertDateJstoPtBr,
} from "./convertDateToPtBr";

describe("convertDateToPtBr()", () => {
  test("verifyTypeOf withDateJs(return aways = 'date')", () => {
    const ACTUAL_DATE = new Date();
    expect(verifyTypeOf(ACTUAL_DATE)).toBe("date");
  });
  test("verifyTypeOf withStringDateJs(return aways = 'date')", () => {
    const ACTUAL_DATE = new Date();
    expect(verifyTypeOf("2021-12-31T02:37:52.032Z")).toBe("date");
  });
  test("verifyTypeOf with datePtBr(return aways = 'string')", () => {
    expect(verifyTypeOf("10/06/1993")).toBe("string");
  });
  test("verifyLanguageDate with datePtBr(return aways = 'ptbr')", () => {
    expect(verifyLanguageDate("10/06/1993")).toBe("ptbr");
  });
  test("verifyLanguageDate with dateUs(return aways = 'us')", () => {
    expect(verifyLanguageDate("1993-10-05")).toBe("us");
  });
  test("checkFormatDate with dateUs(return aways = 'us')", () => {
    expect(checkFormatDate("1993-10-05")).toBe("us");
  });
  test("checkFormatDate with datePtBr(return aways = 'ptbr')", () => {
    expect(checkFormatDate("10/06/1993")).toBe("ptbr");
  });
  test("checkFormatDate with datePtBr(return aways = 'ptbr')", () => {
    const ACTUAL_DATE = new Date();
    expect(checkFormatDate(ACTUAL_DATE)).toBe("js");
  });
  test("formatDateToJs with dateUs(return aways = '1993-06-10T03:00:00.000Z')", () => {
    expect(formatDateToJs("1993-06-10")).toEqual(new Date("1993,06,10"));
  });
  test("formatDateToJs with datePtBr(return aways = '1993-06-10T03:00:00.000Z')", () => {
    expect(formatDateToJs("10/06/1993")).toEqual(new Date("1993,06,10"));
  });
  // Teste mandar formato JS e retornar igual o valor
  test("convertDateJstoPtBr (return aways = '10/06/1993')", () => {
    expect(convertDateJstoPtBr(new Date("1993,06,10"))).toEqual("10/06/1993");
  });
});
