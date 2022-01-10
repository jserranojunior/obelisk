import { dateJstoUs } from "./convertDateToUs";

describe("dateJstoUs()", () => {
  // Teste mandar formato JS e retornar igual o valor
  test("dateJstoUs new Date('1993,06,10') (return aways = 1993-06-10)", () => {
    expect(dateJstoUs(new Date("1993,06,10"))).toBe("1993-06-10");
  });
  // test("dataFormatoBr with JS (return aways = '10/06/1993')", () => {
  //   expect(dataFormatoBr(new Date("1993,06,10"))).toEqual("10/06/1993");
  // });
  // test("dataFormatoBr with US (return aways = '10/06/1993')", () => {
  //   expect(dataFormatoBr("1993-06-10")).toEqual("10/06/1993");
  // });
});
