var oqueElement = document.getElementById("oque");
var selectList = document.getElementById("formas");
var input = document.getElementById("formula");


const base = document.getElementById("baseId");
const altura = document.getElementById("alturaId");
let resultado = document.getElementById('resposta2')

const mode = oqueElement.value;
const formaFigura = selectList.value;



function calAreaQuadrado (base, altura) {
  return (base * altura);
}

function calcularTudo () {
  switch (mode) {
    case 'area':
      if (formaFigura === 'quadrado') {
        resp = calAreaQuadrado(base.value, altura.value);
        console.log(resp);
        resultado.value = `Área = ${resp}cm²`;
      }
      break

  }
}