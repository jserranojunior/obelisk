export function dateWithoutZeroLeft(value: any) {
  const newDate = new Date(value);
  const month = "" + (newDate.getMonth() + 1)
  const  day = "" + (newDate.getDate() + 1)
  const  year = newDate.getFullYear()
  const dateConverted = [year, month, day].join("-");
  return dateConverted;
}

export function addDiasData(data: string, dias: number) {
  // mes-dia-ano
  const hoje = new Date(data);
  const dataVenc = new Date(hoje.getTime() + dias * 24 * 60 * 60 * 1000);
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
  const semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  const d = new Date(value);
  return semana[d.getDay()];
}

export function adicionarDiasAteDiaDaSemana(data: any, diaSemana: any) {
  let dataAtualizada = data;
  let dataSemana = getDiaDaSemana(data);

  while (dataSemana !== diaSemana) {
    dataAtualizada = addDiasData(dataAtualizada, 1);
    dataSemana = getDiaDaSemana(dataAtualizada);
  }
  return dataAtualizada;
}

