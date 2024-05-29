let btnVerificar = document.getElementById('verificar');

btnVerificar.addEventListener('click',verMensaje)

function esPrimoSimple(numero) {
if (numero<= 1) return false;
if (numero<= 3) return true;
if (numero % 2 === 0 || numero % 2 === 0) return false;

for (let i = 2; i*i <= numero; i++)
    if(numero % i===0) return false;



}

function verMensaje(){
let valor = document.getElementById('numero').value;
let resultado = document.getElementById('resultado');
let mensaje = '';

if (esPrimoSimple(valor)) {
mensaje = 'el numero ingresado es primo';
} else {
mensaje = 'el numero ingresado no es primo';
}

resultado.textContent = mensaje;
}