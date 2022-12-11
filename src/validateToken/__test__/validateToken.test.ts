import { describe, expect, test } from "vitest";

import { validateToken } from "../validateToken";

describe("validateToken", () => {
  test("verificar se for null", () => {
    expect(validateToken(null)).toBe(false);
  });
  test("verificar se for undefined", () => {
    expect(validateToken(undefined)).toBe(false);
  });
  test("verificar se for 'undefined'", () => {
    expect(validateToken("undefined")).toBe(false);
  });
  test("verificar se for ''", () => {
    expect(validateToken("")).toBe(false);
  });
  test("verificar se for 'null'", () => {
    expect(validateToken("null")).toBe(false);
  });
});
