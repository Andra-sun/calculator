var oque = document.getElementById("oque").value;
var formas = document.getElementById("formas").value;

var pontosArea = document.getElementById("pontos-area");
var pontosAreaTrapezio = document.getElementById("pontos-area-trapezio");
var pontosAreaCirculo = document.getElementById("pontos-area-circulo");
var pontosAreaPoligono = document.getElementById("pontos-poligono");
var pontosAreaLosangulo = document.getElementById("pontos-losangulo");
var calcular = document.getElementById("calcular")
var titulo2 =document.getElementById("titulo2")

function verificarSelecao() {

    if (oque === "area" && formas === "quadrado") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "flex";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "none";
    } else if (oque === "area" && formas === "retangulo") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "flex";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "none";
    } else if (oque === "area" && formas === "triangulo") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "flex";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "none";
    } else if (oque === "area" && formas === "trapezio") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "none";
        pontosAreaTrapezio.style.display = "flex";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "none";
    } else if (oque === "area" && formas === "poligono") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "none";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "flex";
        pontosAreaLosangulo.style.display = "none";
    } else if (oque === "area" && formas === "losangulo") {
        pontosAreaCirculo.style.display = "none";
        pontosArea.style.display = "none";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "flex";
    } else if (oque === "area" && formas === "circulo") {
        pontosAreaCirculo.style.display = "flex";
        pontosArea.style.display = "none";
        pontosAreaTrapezio.style.display = "none";
        pontosAreaPoligono.style.display = "none";
        pontosAreaLosangulo.style.display = "none";
    } if (formas === "titu") {
        calcular.style.display = "none"
    } else {
        calcular.style.display = "flex"
    }

}

oqueElement.addEventListener("change", function() {
    if (oqueElement.value === "area") {
      titulo2.textContent = "Área";
      updateInput("area");
    } else if (oqueElement.value === "perimetro") {
      titulo2.textContent = "Perímetro";
      titulo2.style.fontSize = "2.6rem";
      titulo2.style.margin = "1rem";
      updateInput("perimetro");
    }
});
  

document.getElementById("oque").addEventListener("change", verificarSelecao);
document.getElementById("formas").addEventListener("change", verificarSelecao);

verificarSelecao();
