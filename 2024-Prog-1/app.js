alert('¡Bienvenida y bievenido a nuestro sitio web!');
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maxIntento = 3
//console.log(numeroUsuario);
while(numeroSecreto != numeroUsuario){
    numeroUsuario = prompt("Me indicas numero del 1 al 10");

    if(numeroSecreto == numeroUsuario){
        //cumplio
        alert(`Acertaste el numero ${numeroUsuario} Hecho en el intento ${intentos} ${intentos ==1 ? 'vez' : 'veces'} `);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('Numero es secreto es menor');
        }else{
            alert('Numero es secreto es mayor');
        }
        //incremento
        intentos++;
        palabraVeces = 'veces';
        if(intentos > maxIntento){
            alert(`LLegaste al numero maximo ${maxIntento} intentos`);
            break;
        }
    }
}