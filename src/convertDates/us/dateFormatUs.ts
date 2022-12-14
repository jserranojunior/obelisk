import { describe, expect, test } from "vitest";

import { dateJstoUs, dateFormatUs } from "./convertDateToUs";

describe("dateJstoUs()", () => {
  // Teste mandar formato JS e retornar igual o valor
  test("dateFormatUs new Date('1993,06,10') (return aways = 1993-06-10)", () => {
    expect(dateJstoUs(new Date("1993,06,10"))).toBe("1993-06-10");
  });
  test("convertDateToUS (return aways = '1993-06-10')", () => {
    expect(dateFormatUs("10/06/1993")).toEqual("1993-06-10");
  });
  test("dateFormatUs with JS (return aways = '1993-06-10')", () => {
    expect(dateFormatUs(new Date("1993,06,10"))).toEqual("1993-06-10");
  });
  test("dateFormatUs with US (return aways = '1993-06-10')", () => {
    expect(dateFormatUs("1993-06-10")).toEqual("1993-06-10");
  });
});
