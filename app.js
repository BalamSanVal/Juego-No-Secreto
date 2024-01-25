// ctrl+f para buscar
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste le numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya fue sorteado todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){ //includes recorre toda la lista
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    mensajesIniciales();
    //Generar numero aleatorio
    //Inicializar el numero de intentos
    //Desabilitar el boton de nuevo juegos
    condicionesIniciales();
}

condicionesIniciales();