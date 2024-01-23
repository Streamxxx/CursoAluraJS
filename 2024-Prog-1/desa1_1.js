alert('¡Bienvenida y bievenido a nuestro sitio web!');
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 100;
//console.log(numeroUsuario);
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);
nombre = prompt("Me indicas tu nombre");
edad = prompt("Me indicas tu edad");
if(edad>=18){
    alert('¡Puedes obtener tu licencia de conducir!');
}