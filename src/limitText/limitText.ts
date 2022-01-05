export function returnStringEmpty() {
  return "";
}

export function returnValueSlice(value: string, tamanho: number) {
  value = value.toString();
  return value.substring(0, tamanho) + " ...";
}

export function filterValueToSlice(value: string, tamanho: number) {
  if (value === "" || value === undefined || value === null) {
    return returnStringEmpty();
  } else {
    return returnValueSlice(value, tamanho);
  }
}

export function limitText(value: string, tamanho: number) {
  return filterValueToSlice(value, tamanho);
}
