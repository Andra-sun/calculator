var oqueElement = document.getElementById("oque");
var selectList = document.getElementById("formas");
var input = document.getElementById("formula");
const base = document.querySelector("#ib");
const altura = document.getElementById("item-d");
const areaq = document.getElementById("item-a");

oqueElement.addEventListener("change", function() {
  var modo = oqueElement.value;

  if (modo === "area") {
    if (selectList.value === "quadrado") { 
      const area = base.value * altura.value;
      areaq.value = area;
    }
  }
});
