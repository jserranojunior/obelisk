export function calculateAgeWithMonths(value: any) {
  const ano = calcularAnosIdade(value);
  const meses = mesesDeVidaNoAnoAtual(value);
  return `${ano} anos e ${meses} meses`;
}
export function calcularAnosIdade(value: string) {
  if (value.length === 10) {
    const nascimento = value.split("-");
    const dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[2], 10)
    );
    const diferenca = Date.now() - dataNascimento.getTime();
    const calIdade = new Date(diferenca);
    const idade = Math.abs(calIdade.getUTCFullYear() - 1970);
    return idade;
  }
}

function mesesDeVidaNoAnoAtual(value: string) {
  if (value.length === 10) {
    const nascimento = value.split("-");
    const dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10),
      parseInt(nascimento[2], 10)
    );
    const today = new Date();
    const mesAtual = today.getMonth();
    const diaAtual = today.getDate();
    let meses = 0;
    let mesesFalta = 0;
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();
    if (mesNascimento > mesAtual) {
      mesesFalta = mesNascimento - mesAtual;
      meses = 12 - mesesFalta;
      if (diaNascimento < diaAtual) {
        meses = meses - 1;
      }
    } else if (mesNascimento < mesAtual) {
      mesesFalta = mesNascimento + mesAtual;
      meses = 12 - mesesFalta;
      if (diaNascimento < diaAtual) {
        meses = meses - 1;
      }
    } else {
      if (diaNascimento < diaAtual) {
        meses = 11;
      } else {
        meses = 0;
      }
    }
    return meses;
  }
}
