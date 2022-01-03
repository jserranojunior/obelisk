export function dateUStoJsFull(value: any) {
  if (value) {
    var data = value.replace(/-/g, ",");
    var date = new Date(data);
    return date;
  } else {
    return value;
  }
}

export function dateUStoJs(value: any) {
  if (value) {
    var data = value.replace(/-/g, ",");
    var date = new Date(data);
    return (
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear()
    );
  } else {
    return value;
  }
}

export function dateJstoUs(value: any) {
  var d = new Date(value),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function dateWithoutZeroLeft(value: any) {
  let newDate = new Date(value);
  const month = "" + (newDate.getMonth() + 1),
    day = "" + (newDate.getDate() + 1),
    year = newDate.getFullYear();
  const dateConverted = [year, month, day].join("-");
  return dateConverted;
}

export function addDiasData(data: string, dias: number) {
  // mes-dia-ano
  var hoje = new Date(data);
  var dataVenc = new Date(hoje.getTime() + dias * 24 * 60 * 60 * 1000);
  return (
    dataVenc.getMonth() +
    1 +
    "-" +
    dataVenc.getDate() +
    "-" +
    dataVenc.getFullYear()
  );
}

function getDiaDaSemana(value: any) {
  var semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  var d = new Date(value);
  return semana[d.getDay()];
}

export function adicionarDiasAteDiaDaSemana(data: any, diaSemana: any) {
  var dataAtualizada = data;
  var dataSemana = getDiaDaSemana(data);

  while (dataSemana !== diaSemana) {
    dataAtualizada = addDiasData(dataAtualizada, 1);
    dataSemana = getDiaDaSemana(dataAtualizada);
  }
  return dataAtualizada;
}

export function datePtBrToUs(data: any) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

export function datePtBrToJs(data: any) {
  var dia = data.split("/")[0];
  var mes = data.split("/")[1];
  var ano = data.split("/")[2];

  return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
}

export function converterDateCalendarToUs(value: any) {
  var data = value.replace(/-/g, ",");

  data = new Date(data);

  var month = "" + (data.getMonth() + 1),
    day = "" + data.getDate(),
    year = data.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

export function converterDateUsToCalendar(value: any) {
  var data = value.replace(/-/g, ",");
  var options: any = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  var today = new Date(data);
  var dataConvertida = new Date(today).toLocaleDateString("pt-BR", options);
  return dataConvertida;
}
