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
      parseInt(nascimento[1], 10),
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
    const mesAtual = today.getMonth() + 1
    const diaAtual = today.getDate();
    let meses = 0;
    let mesesFalta = 0;
    const mesNascimento = dataNascimento.getMonth() + 1;
    const diaNascimento = dataNascimento.getDate();

  

    if (mesNascimento > mesAtual) {
      mesesFalta = mesNascimento - mesAtual;
      meses = 12 - mesesFalta;
    }
    if (mesNascimento < mesAtual) {
      mesesFalta = mesNascimento + mesAtual;
      meses = mesesFalta
    }
    if(mesNascimento === mesAtual) {
      meses = 0;
    }
    console.log("dia mascimento" + diaNascimento)
    console.log(diaAtual)
    if (diaNascimento > diaAtual) {
      console.log("Dia é maior")
      meses = meses + 1;
    }

  
    

    return meses;
  }
}
// 08 > 07
// 06 - 7 = 1

