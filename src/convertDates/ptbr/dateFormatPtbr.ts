import { dateFormatJs } from "../js/dateFormatJs";

export function convertDateJstoPtBr(value: Date) {
  const OPTIONS: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return new Date(value).toLocaleDateString("pt-BR", OPTIONS);
}



export function dateFormatPtbr(value: string | Date) {

  const StringDate = String(value)

  const DATEINJS: any = dateFormatJs(StringDate);
  const DATEINPTBR = convertDateJstoPtBr(DATEINJS);
  return DATEINPTBR;
}
