import {validarToken} from "../validarToken"

describe("validarToken", () =>{
  test("verificar se for null", ()=>{
    expect(validarToken(null)).toBe(false)
  })
  test("verificar se for undefined", ()=>{
    expect(validarToken(undefined)).toBe(false)
  })
  test("verificar se for 'undefined'", ()=>{
    expect(validarToken("undefined")).toBe(false)
  })
   test("verificar se for ''", ()=>{
    expect(validarToken("")).toBe(false)
  })
     test("verificar se for 'null'", ()=>{
    expect(validarToken("null")).toBe(false)
  })
})