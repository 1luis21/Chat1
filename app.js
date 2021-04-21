const btnEjecutar = document.getElementById("btnEjecutar");
btnEjecutar.addEventListener("click", (e) => {

    let fx0 = document.getElementById("txtfx0").value;
    let fx1 = document.getElementById("txtfx1").value;
    let x = document.getElementById("txtx").value;
    let x0 = document.getElementById("txtx0").value;
    let x1 = document.getElementById("txtx1").value;

    let res = 0;

    res = fx0 + (((fx1 - fx0) / (x1 - x0)) * (x - x0));

    console.log(res);

    let resultados = document.getElementById("resultados");
    resultados.innerHTML = "<p> Resultado: " + res + "<p>";

});