alert('¡Bienvenida y bievenido a nuestro sitio web!');
let numberIni  = prompt("Indica el numero inicial:");
let numberEnd  = prompt("Indica el numero final:");
let numeroSecreto = Math.floor(Math.random()*(numberEnd-numberIni)) +numberIni;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maxIntento = 3;
//console.log(numeroUsuario);
while(numeroSecreto != numeroUsuario){
    
    numeroUsuario = prompt(`Me indicas numero del ${numberIni} al ${numberEnd}`);
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
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

/*
git status
git add.
git commit -m "changes"
git checkout master o main
git push origin main
*/