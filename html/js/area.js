function updateInput() {
    var selectList = document.getElementById("formas");
    var input = document.getElementById("formula");
    
    var selectedOption = selectList.options[selectList.selectedIndex].value;
    if (selectedOption === "quadrado") {
      input.value = "A=L²";
    } else if (selectedOption === "retangulo") {
      input.value = "A=b*h";
    } else if (selectedOption === "triangulo") {
        input.value = "A=(B*h)/2";
    } else if (selectedOption === "trapezio") {
        input.value = "A=[(B+b)*h]/2";
    } else if (selectedOption === "poligono") {
        input.value = "A=B*L*Senα";
    } else if (selectedOption === "losangulo") {
        input.value = "A=(D*d)/2";
    } else if (selectedOption === "circulo") {
        input.value = "A=π*r²";
    }
}

    