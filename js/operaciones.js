

// Función procedimiento de Sumar dos nros

function Sumar(){
    let Nr1 = Number(document.getElementById("nr1").value);
    let Nr2 = Number(document.getElementById("nr2").value);
    let sumar = Nr1 + Nr2;
    document.getElementById('Resultado').value = sumar;
}

function Restar(){
    let Nr1 = Number(document.getElementById("nr1").value);
    let Nr2 = Number(document.getElementById("nr2").value);
    let restar = Nr1 - Nr2;
    document.getElementById('Resultado').value = restar;
}

function Multi(){
    let Nr1= parseInt(document.getElementById("nr1").value);
    let Nr2= parseInt(document.getElementById("nr1").value);
    let multiplicar = Nr1*Nr2;
    document.getElementById('Resultado').value = multiplicar;



}