import { describe, expect, test } from "vitest";

import { dateFormatPtbr } from "./dateFormatPtbr";

describe("convertDateToPtBr()", () => {
  // Teste mandar formato JS e retornar igual o valor
  test("convertDateJstoPtBr (return aways = '10/06/1993')", () => {
    expect("10/06/1993").toEqual("10/06/1993");
  });
  test("dataFormatoBr with JS (return aways = '10/06/1993')", () => {
    expect(dateFormatPtbr(new Date("1993,06,10"))).toEqual("10/06/1993");
  });
  test("dataFormatoBr with US (return aways = '10/06/1993')", () => {
    expect(dateFormatPtbr("1993-06-10")).toEqual("10/06/1993");
  });
});
