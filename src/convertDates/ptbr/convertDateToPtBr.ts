import { dateFormatJs } from "../js/formatDateToJs";

export function convertDateJstoPtBr(value: Date) {
  const OPTIONS: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(value).toLocaleDateString("pt-BR", OPTIONS);
}

export function dateFormatPtbr(value: string | Date) {
  const DATEINJS: any = dateFormatJs(value);
  const DATEINPTBR = convertDateJstoPtBr(DATEINJS);
  return DATEINPTBR;
}
