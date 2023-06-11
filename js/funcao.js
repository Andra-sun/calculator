const $form = document.querySelector("form");
const $a = document.querySelector("#a");
const $b = document.querySelector("#b");
const $c = document.querySelector("#c");
const $del = document.querySelector("#delta")
const $x1 = document.querySelector("#x1");
const $x2 = document.querySelector("#x2");
const $falta = document.querySelector("#falta");

function bhaskara() {
    const a = $a.value;
    const b = $b.value;
    const c = $c.value;

    const delta = b * b - 4 * a * c;
    $del.value = delta;

    if (!a || !b || !c) {
        createAlert("Insira os valores");
    } else if (a == 0) {
        createAlert("O valor de <strong>a</strong>, deve ser diferente de 0");
    } else if (delta < 0) {
        createAlert("Sem raízes reais");
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);

        if (Number.isInteger(x1)) {
            $x1.value = x1;
        } else {
            $x1.value = getFraction(x1);
        }

        if (Number.isInteger(x2)) {
            $x2.value = x2;
        } else {
            $x2.value = getFraction(x2);
        }
    }
}

function getFraction(decimal) {
    const epsilon = 1.0e-6;
    let numerator = 1;
    let denominator = 1;

    while (Math.abs(decimal - Math.round(decimal)) > epsilon) {
        decimal *= 10;
        numerator *= 10;
        denominator *= 10;
    }

    numerator = Math.round(decimal);
    const gcd = greatestCommonDivisor(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return numerator + "/" + denominator;
}

function greatestCommonDivisor(a, b) {
    if (b === 0) {
        return a;
    }

    return greatestCommonDivisor(b, a % b);
}



  
function createAlert(msg) {
    document
      .querySelector("body")
      .insertAdjacentHTML("beforebegin", `<div class='alert'>${msg}</div>`);
  
    setTimeout(function () {
      deleteAlert();
    }, 3000);
}
  
function deleteAlert() {
    const list = document.querySelectorAll(".alert");
    for (const item of list) {
      item.remove();
    }
}

$falta.addEventListener("change", function () {
    if ($falta.checked) {
      if ($a.value === "") {
        $a.value = 1;
      }
      if ($b.value === "") {
        $b.value = 1;
      }
      if ($c.value === "") {
        $c.value = 0;
      }
    }
});
  
$form.addEventListener("submit", function (event) {
    event.preventDefault();
    bhaskara();
});
