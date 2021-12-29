export const calcularIdadeComMeses = (value: string) => {
  if (value) {
    if (value.length == 10) {
      // if (value.includes("/")) {
      //   value = datePtBrToUs(value);
      // }
      // Converter portugues para ingles

      const ano = calcularAnosIdade(value);
      const meses: any = mesesDeVidaNoAnoAtual(value);

      let newMeses = meses.toString();
      if (newMeses.includes("-")) {
        newMeses = newMeses.replace("-", "");
      }
      return `${ano} anos e ${newMeses} meses`;
    }
  }
};

// export function idadeComMeses(value: any) {
//   return calcularIdadeComMeses(value);
// }

// function calcularIdadeComMeses(value: any) {
//   const ano = calcularAnosIdade(value);
//   const meses = mesesDeVidaNoAnoAtual(value);
//   return `${ano} anos e ${meses} meses`;
// }
function calcularAnosIdade(value: string) {
  if (value.length == 10) {
    var nascimento = value.split("-");
    var dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[2], 10)
    );
    var diferenca = Date.now() - dataNascimento.getTime();
    var calIdade = new Date(diferenca);
    var idade = Math.abs(calIdade.getUTCFullYear() - 1970);
    return idade;
  }
}

function mesesDeVidaNoAnoAtual(value: string) {
  if (value.length == 10) {
    var nascimento = value.split("-");
    var dataNascimento = new Date(
      parseInt(nascimento[0], 10),
      parseInt(nascimento[1], 10) - 1,
      parseInt(nascimento[2], 10)
    );
    const today = new Date();
    const mesAtual = today.getMonth() + 1;
    const diaAtual = today.getDate();

    var meses = 0;
    var mesesFalta = 0;
    var mesNascimento = dataNascimento.getMonth();
    var diaNascimento = dataNascimento.getDate();

    console.log("Mes Atual: ", mesAtual, "Mes de nascimento: ", mesNascimento);

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
