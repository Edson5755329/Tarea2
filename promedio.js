function promedio(a,b,c){
    return (a*b*c);
 }
function calcularPromedio() {
    const vr1 = document.getElementById("t1"); 
    const valor = vr1.value;
    const vr2 = document.getElementById("t2"); 
    const valor2 = vr2.value;
    const vr3 = document.getElementById("t3"); 
    const valor3 = vr3.value;
    const promedio = promedio(parseFloat(valor),parseFloat(valor2),parseFloat(valor3));
    const resultado = document.getElementById("Promedio");
    resultado.innerText = `El promedio es : ${promedio}`;
}

