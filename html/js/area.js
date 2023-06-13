var oqueElement = document.getElementById("oque");
var selectList = document.getElementById("formas");
var input = document.getElementById("formula");
const base = document.querySelector("#baseQuadrado");
const altura = document.getElementById("alturaQuadrado");
const resultado = document.getElementById("resposta2");


var mode = oqueElement.value;
// Função para atualizar as informações com base na seleção
function updateInput () {
    var selectedOption = selectList.options[selectList.selectedIndex].value;


    if (mode === "area") {
        if (selectedOption === "quadrado") {
            input.value = "A = B*H";

        } else if (selectedOption === "retangulo") {
            input.value = "A = b * h";
        } else if (selectedOption === "triangulo") {
            input.value = "A = (B * h) / 2";
        } else if (selectedOption === "trapezio") {
            input.value = "A = [(B + b) * h] / 2";
        } else if (selectedOption === "poligono") {
            input.value = "A = B * L * Senα";
        } else if (selectedOption === "losangulo") {
            input.value = "A = (D * d) / 2";
        } else if (selectedOption === "circulo") {
            input.value = "A = π * r²";
        }
    } else if (mode === "perimetro") {
        if (selectedOption === "quadrado") {
            input.value = "P = 4 * L";
        } else if (selectedOption === "retangulo") {
            input.value = "P = 2 * (b + h)";
        } else if (selectedOption === "triangulo") {
            input.value = "P = a + b + c";
        } else if (selectedOption === "trapezio") {
            input.value = "P = a + b + c + d";
        } else if (selectedOption === "poligono") {
            input.value = "P = n * L";
        } else if (selectedOption === "losangulo") {
            input.value = "P = 4 * L";
        } else if (selectedOption === "circulo") {
            input.value = "P = 2 * π * r";
        }
    } else {
        // Caso nenhuma opção válida seja selecionada
        input.value = "";
    }
}


function calAreaQuadrado (base, altura) {
    return (base * altura);

}

function calcularTudo () {
    console.log('OIe');
    switch (mode) {
        case 'area':
            console.log('OIe2');

            resp = calAreaQuadrado(base.value, altura.value);
            console.log(resp);
            resultado.value = `Área = ${resp}cm²`;

            break

    }
}

// Evento acionado quando o valor do elemento é alterado
oqueElement.addEventListener("change", updateInput);

// Chamada inicial para exibir as informações corretas
updateInput();
