export function dateJstoUs(value: any) {
  const d = new Date(value)
  let  month = "" + (d.getMonth() + 1)
  let  day = "" + d.getDate()
  const  year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function datePtBrToUs(data: any) {
  const dia = data.split("/")[0];
  const mes = data.split("/")[1];
  const ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}
