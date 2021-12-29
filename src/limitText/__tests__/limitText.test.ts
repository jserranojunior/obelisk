import {
  limitText,
  returnStringEmpty,
  returnValueSlice,
  filterValueToSlice,
} from "../limitText";

describe("limitText()", () => {
  test("returnStringEmpty (return aways = '')", () => {
    expect(returnStringEmpty()).toBe("");
  });

  test("returnValueSlice (ReturnValueSlice 7 strings = ReturnV ...)", () => {
    expect(returnValueSlice("ReturnValueSlice", 7)).toBe("ReturnV ...");
  });

  test("filterValueToSlice (filterValueToSlice 7 strings = filterV ...)", () => {
    expect(filterValueToSlice("filterValueToSlice", 7)).toBe("filterV ...");
  });

  test("filterValueToSlice (isEmpty strings = '')", () => {
    expect(filterValueToSlice("", 7)).toBe("");
  });

  test("limitText (Boris 3 strings = Bor ...)", () => {
    expect(limitText("Boris", 3)).toBe("Bor ...");
  });

  test("LimitText (empty strings = '')", () => {
    expect(limitText("", 7)).toBe("");
  });
});
