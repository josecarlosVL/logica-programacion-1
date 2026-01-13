let num1 = parseFloat(prompt("Dame el primer número: "));
let num2 = parseFloat(prompt("Dame el segundo número: "));
let num3 = parseFloat(prompt("Dame el tercer número: "));

let vector = [num1,num2,num3];

let mayor = vector.sort((a, b) => a - b);
let menor = mayor.toReversed();
const numUnicos =new Set(vector);
const numRepetidos = vector.length - numUnicos.size;
console.log(numUnicos);
const sol1 = document.getElementById("solucion1");
sol1.innerHTML = mayor.join(' ');
console.log(numRepetidos);
const sol2 = document.getElementById("solucion2");
sol2.innerHTML = menor.join(' ');
if (numRepetidos > 0)
{
    document.getElementById("repeticiones").innerHTML =`Hay números repetidos.`
}
