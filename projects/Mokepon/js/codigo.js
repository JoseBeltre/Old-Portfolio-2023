let ataqueJugador
let ataqueEnemigo
let resultadoPelea
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    document.getElementById('seleccion-ataque').style.display = 'none'
    document.getElementById('ultimo-section').style.display = 'none'
    

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-ataque-fuego')
    botonFuego.addEventListener('click', AtaqueFuego)
    let botonAgua = document.getElementById('boton-ataque-agua')
    botonAgua.addEventListener('click', AtaqueAgua)
    let botonTierra = document.getElementById('boton-ataque-tierra')
    botonTierra.addEventListener('click', AtaqueTierra)
    let botonReinicio = document.getElementById('boton-reinicio')
    botonReinicio.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked == true ){
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if (inputCapipepo.checked == true ){
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if (inputRatigueya.checked == true ){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {
        alert('No has seleccionado ninguna mascota')
    }
    if ( (inputHipodoge.checked == true ) || (inputCapipepo.checked == true ) || (inputRatigueya.checked == true ) ){
        document.getElementById('seleccion-ataque').style.display = 'flex'
        document.getElementById('seleccion-mascota').style.display = 'none'
        seleccionarMascotaEnemigo()
    }
}
function seleccionarMascotaEnemigo(){
    let seleccionMascota = randomNum(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (seleccionMascota == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (seleccionMascota == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}
function AtaqueFuego(){  
    ataqueJugador = 'Fuego'
    seleccionAtaqueEnemigo()
}
function AtaqueAgua(){
    ataqueJugador = 'Agua'
    seleccionAtaqueEnemigo()
}
function AtaqueTierra(){
    ataqueJugador = 'Tierra'
    seleccionAtaqueEnemigo()
}
function seleccionAtaqueEnemigo(){
    ataqueAleatorioEnemigo = randomNum(1,3)
    if (ataqueAleatorioEnemigo ==1){
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorioEnemigo ==2){
        ataqueEnemigo = 'Agua'
    } else if (ataqueAleatorioEnemigo ==3){
        ataqueEnemigo = 'Tierra'
    }
    combate()
}
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    

    if (ataqueJugador == ataqueEnemigo){
        resultadoPelea = 'EMPATE'
        crearMensajes()
    } else if ((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra')  || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego')){
        resultadoPelea = 'GANASTE'
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensajes()
    } else {
        resultadoPelea = 'PERDISTE'
        vidasJugador -= 1
        spanVidasJugador.innerHTML = vidasJugador
        crearMensajes()
    }

    revisarVidas()
}

function revisarVidas(){
    let sectionUltimo = document.getElementById('ultimo-section')
    let mensajeVidas = document.createElement('p')
    let divReferencia = document.getElementById('div-reiniciar')

    if (vidasEnemigo == 0 || vidasJugador == 0)
        botonFuego = document.getElementById('boton-ataque-fuego')
        botonFuego.disabled = true
        botonAgua = document.getElementById('boton-ataque-agua')
        botonAgua.disabled = true
        botonTierra = document.getElementById('boton-ataque-tierra')
        botonTierra.disabled = true

        if (vidasEnemigo == 0){
            mensajeVidas.innerHTML = 'Gana el Jugador'
            sectionUltimo.insertBefore(mensajeVidas,divReferencia)
        } else if (vidasJugador == 0){
            mensajeVidas.innerHTML = 'Gana la Máquina'
            sectionUltimo.insertBefore(mensajeVidas,divReferencia)
    }
    document.getElementById('ultimo-section').style.display = 'flex'
}

function crearMensajes(){
    let sectionMensajes = document.getElementById('resultado')
    let mostrarAtaqueJugador = document.getElementById('ataque-jugador')
    let mostrarAtaqueEnemigo = document.getElementById('ataque-enemigo')
    
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultadoPelea
    nuevoAtaqueJugador.innerHTML = ataqueJugador 
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    mostrarAtaqueEnemigo.appendChild(nuevoAtaqueEnemigo)
    mostrarAtaqueJugador.appendChild(nuevoAtaqueJugador)
}

function reiniciarJuego(){
    location.reload()
}

function randomNum(min, max){
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
}
window.addEventListener('load', iniciarJuego)