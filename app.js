let numeroSecreto = 0;
let intentos=1;
let numeroSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        //usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','Numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','Numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    //ya sorteamos todos los numeros
    if(numeroSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos numeros posibles');
    }else{
        //Si el numeroGenerado ya esta en la lista
        if(numeroSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }  
    }
      
}
function condicionInicial(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //mensaje de inicio
    //generar numero aleatorio
    //Deshabilitar el boton
    condicionInicial();
    //Inicializar los intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}
condicionInicial();
//git status
//git add .
//git commit -m 'fecha'
//git push