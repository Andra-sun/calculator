var selectMedida1 = document.getElementById("m1");
var selectMedida2 = document.getElementById("m2");
var inputValor = document.getElementById("vrli");
var inputResultado = document.getElementById("resposta");
var btnCalcular = document.getElementById("printar");

btnCalcular.addEventListener("click", function () {
    var medida1 = selectMedida1.value;
    var medida2 = selectMedida2.value;



    var valorResp = inputValor.value;

    var valor = parseFloat(valorResp.replace(',', '.'));
    // console.log(valor);


    if (medida1 && medida2 && !isNaN(valor)) {
        var resultado;

        if (medida1 === "km" && medida2 === "hm") {
            resultado = valor * 10;
        } else if (medida1 === "km" && medida2 === "dam") {
            resultado = valor * 100;
        } else if (medida1 === "km" && medida2 === "m") {
            resultado = valor * 1000;
        } else if (medida1 === "km" && medida2 === "dm") {
            resultado = valor * 10000;
        } else if (medida1 === "km" && medida2 === "cm") {
            resultado = valor * 100000;
        } else if (medida1 === "km" && medida2 === "mm") {
            resultado = valor * 1000000;
        }

        if (medida1 === "hm" && medida2 === "km") {
            resultado = valor / 10;
        } else if (medida1 === "hm" && medida2 === "dam") {
            resultado = valor * 10;
        } else if (medida1 === "hm" && medida2 === "m") {
            resultado = valor * 100;
        } else if (medida1 === "hm" && medida2 === "dm") {
            resultado = valor * 1000;
        } else if (medida1 === "hm" && medida2 === "cm") {
            resultado = valor * 10000;
        } else if (medida1 === "hm" && medida2 === "mm") {
            resultado = valor * 100000;
        }

        if (medida1 === "dam" && medida2 === "km") {
            resultado = valor / 100;
        } else if (medida1 === "dam" && medida2 === "hm") {
            resultado = valor / 10;
        } else if (medida1 === "dam" && medida2 === "m") {
            resultado = valor * 10;
        } else if (medida1 === "dam" && medida2 === "dm") {
            resultado = valor * 100;
        } else if (medida1 === "dam" && medida2 === "cm") {
            resultado = valor * 1000;
        } else if (medida1 === "dam" && medida2 === "mm") {
            resultado = valor * 10000;
        }

        if (medida1 === "m" && medida2 === "km") {
            resultado = valor / 1000;
        } else if (medida1 === "m" && medida2 === "hm") {
            resultado = valor / 100;
        } else if (medida1 === "m" && medida2 === "dam") {
            resultado = valor / 10;
        } else if (medida1 === "m" && medida2 === "dm") {
            resultado = valor * 10;
        } else if (medida1 === "m" && medida2 === "cm") {
            resultado = valor * 100;
        } else if (medida1 === "m" && medida2 === "mm") {
            resultado = valor * 1000;
        }

        if (medida1 === "dm" && medida2 === "km") {
            resultado = valor / 10000;
        } else if (medida1 === "dm" && medida2 === "hm") {
            resultado = valor / 1000;
        } else if (medida1 === "dm" && medida2 === "dam") {
            resultado = valor / 100;
        } else if (medida1 === "dm" && medida2 === "m") {
            resultado = valor / 10;
        } else if (medida1 === "dm" && medida2 === "cm") {
            resultado = valor * 10;
        } else if (medida1 === "dm" && medida2 === "mm") {
            resultado = valor * 100;
        }

        if (medida1 === "cm" && medida2 === "km") {
            resultado = valor / 100000;
        } else if (medida1 === "cm" && medida2 === "hm") {
            resultado = valor / 10000;
        } else if (medida1 === "cm" && medida2 === "dam") {
            resultado = valor / 1000;
        } else if (medida1 === "cm" && medida2 === "m") {
            resultado = valor / 100;
        } else if (medida1 === "cm" && medida2 === "dm") {
            resultado = valor / 10;
        } else if (medida1 === "cm" && medida2 === "mm") {
            resultado = valor * 10;
        }

        if (medida1 === "mm" && medida2 === "km") {
            resultado = valor / 1000000;
        } else if (medida1 === "mm" && medida2 === "hm") {
            resultado = valor / 100000;
        } else if (medida1 === "mm" && medida2 === "dam") {
            resultado = valor / 10000;
        } else if (medida1 === "mm" && medida2 === "m") {
            resultado = valor / 1000;
        } else if (medida1 === "mm" && medida2 === "dm") {
            resultado = valor / 100;
        } else if (medida1 === "mm" && medida2 === "cm") {
            resultado = valor / 10;
        }

        if (medida1 === medida2) {
            resultado = valor;
        }

        switch (medida2) {
            case "km":
                inputResultado.value = `${resultado}km`;
                break;

            case "hm":
                inputResultado.value = `${resultado}hm`;
                break;

            case "dam":
                inputResultado.value = `${resultado}dam`;
                break;

            case "m":
                inputResultado.value = `${resultado}m`;
                break;

            case "dm":
                inputResultado.value = `${resultado}dm`;
                break;

            case "cm":
                inputResultado.value = `${resultado}cm`;
                break;

            case "mm":
                inputResultado.value = `${resultado}mm`;
                break;
        }
    } else {
        var mensagens = [
            "ヘ⁠（⁠。⁠□⁠°⁠）⁠ヘ",
            "⁄⁠(⁠⁄⁠ ⁠⁄⁠•⁠⁄⁠-⁠⁄⁠•⁠⁄⁠ ⁠⁄⁠)⁠⁄",
            "(⁠●⁠_⁠_⁠●⁠)",
            "(⁠(⁠(⁠;⁠ꏿ⁠_⁠ꏿ⁠;⁠)⁠)⁠)",
            "ERROR",
            "😰",
            "(o_o;)",
            "(oᗜo;)",
        ];

        var mensagemAleatoria =
            mensagens[Math.floor(Math.random() * mensagens.length)];

        inputResultado.value = mensagemAleatoria;
    }
    if (inputResultado.value === ',') {
        inputResultado.value = mensagemAleatoria;
    }

});

function validarInput (event) {
    var tecla = event.which || event.keyCode;
    var valor = String.fromCharCode(tecla);
    var padrao = /[0-9.]/;

    if (!padrao.test(valor)) {
        event.preventDefault();
        return false;
    }
}
