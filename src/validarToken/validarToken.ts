export function validarToken(token:any){
  if(token === null || token === "null" || token === undefined || token === "undefined" || token === "" ){
    return false;
  }
}