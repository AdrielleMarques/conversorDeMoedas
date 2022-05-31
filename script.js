//Declaração da função
function converterMoeda() {
  //Moeda que será convertida
  var tipoMoedaUm = document.querySelector(".tipoMoedaUm").value;
  //Valor que será convertido
  var valorMoedaUm = Number(document.querySelector("#valorMoedaUm").value);
  //Moeda desejada para a conversão
  var tipoMoedaDois = document.querySelector(".tipoMoedaDois").value;
  //Cálculo da conversão
  if (tipoMoedaUm == "brl") {
    if (tipoMoedaDois == "usd") {
      valorConvertido = valorMoedaUm / 5.51;
    } else if (tipoMoedaDois == "eur") {
      valorConvertido = valorMoedaUm / 6.58;
    } else if (tipoMoedaDois == "brl") {
      valorConvertido = valorMoedaUm;
    }
  } else if (tipoMoedaUm == "usd") {
    if (tipoMoedaDois == "brl") {
      valorConvertido = valorMoedaUm * 5.51;
    } else if (tipoMoedaDois == "eur") {
      valorConvertido = valorMoedaUm / 1.19;
    } else if (tipoMoedaDois == "usd") {
      valorConvertido = valorMoedaUm;
    }
  } else if (tipoMoedaUm == "eur") {
    if (tipoMoedaDois == "brl") {
      valorConvertido = valorMoedaUm * 6.58;
    } else if (tipoMoedaDois == "usd") {
      valorConvertido = valorMoedaUm * 1.19;
    } else if (tipoMoedaDois == "eur") {
      valorConvertido = valorMoedaUm;
    }
  }
  //Impressão do resultado
  document.querySelector("#valorMoedaDois").innerHTML = valorConvertido.toFixed(
    2
  );
}
//Valor Convertido
var valorConvertido = 0;
//Ipressão do resultado
document.querySelector("#valorMoedaDois").innerHTML = valorConvertido.toFixed(
  2
);
//Converter!!!
const converterButton = document.querySelector("button");
//Ativação do butão
converterButton.onclick = converterMoeda;


/*
let customFunction;
   const usd = {
     eur: (value) => value / 1.19,
     brl: (value) => value * 5.51,
     usd: (value) => value,
   }
   
   const brl = {
        usd: (value) => value / 5.51,
        eur: (value) => value / 6.58,
        brl: (value) => value,
    }
    
    const eur = {
        brl: (value) => value * 6.58,
        usd: (value) => value * 1.19,
        eur: (value) => value,
    }
    
    if(tipoMoedaUm === 'brl') customFunction = brl [tipoMoedaDois];

    if(tipoMoedaUm === 'usd') customFunction = usd[tipoMoedaDois];

    if(tipoMoedaUm === 'eur') customFunction = eur [tipoMoedaDois];
    */