const sectionSeleccionarAtaque = document.getElementById('seleccion-ataque')
const sectionReiniciar = document.getElementById('ultimo-section')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReinicio = document.getElementById('boton-reinicio')



const spanMascotaJugador = document.getElementById('mascota-jugador')
const sectionSeleccionarMascota = document.getElementById('seleccion-mascota')


const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')


const divReferencia = document.getElementById('div-reiniciar')

const contenedorAtaques = document.getElementById('contenedor-ataques')


const sectionMensajes = document.getElementById('resultado')
const mostrarAtaqueJugador = document.getElementById('ataque-jugador')
const mostrarAtaqueEnemigo = document.getElementById('ataque-enemigo')


let mokepones = []
let ataqueEnemigo = []
let resultadoPelea
let opcionMokepones 
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let botonFuego 
let botonAgua 
let botonTierra
let botones = []
let ataqueJugador = []
let ataquesMokeponEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./media/hipodoge.png', 5)

let capipepo = new Mokepon('Capipepo','./media/capipepo.png', 5)

let ratigueya = new Mokepon('Ratigueya', './media/ratigueya.png', 5)

mokepones.push(hipodoge, capipepo, ratigueya)

hipodoge.ataques.push(
    {nombre: '🌊', id: 'boton-ataque-agua'},
    {nombre: '🌊', id: 'boton-ataque-agua'},
    {nombre: '🌊', id: 'boton-ataque-agua'},
    {nombre: '🔥', id: 'boton-ataque-fuego'},
    {nombre: '🌱', id: 'boton-ataque-tierra'},
)
capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-ataque-tierra'},
    {nombre: '🌱', id: 'boton-ataque-tierra'},
    {nombre: '🌱', id: 'boton-ataque-tierra'},
    {nombre: '🔥', id: 'boton-ataque-fuego'},
    {nombre: '🌊', id: 'boton-ataque-agua'},
)
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-ataque-fuego'},
    {nombre: '🔥', id: 'boton-ataque-fuego'},
    {nombre: '🔥', id: 'boton-ataque-fuego'},
    {nombre: '🌊', id: 'boton-ataque-agua'},
    {nombre: '🌱', id: 'boton-ataque-tierra'},
)




function iniciarJuego(){
    
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
                <label id="${mokepon.nombre}-label" for=${mokepon.nombre} >
                    <p>${mokepon.nombre}</p>
                    <img src=${mokepon.foto} alt=${mokepon.nombre} >
                </label>
        `
    contenedorTarjetas.innerHTML += opcionMokepones
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    })

    
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    botonReinicio.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){

    if (inputHipodoge.checked == true ){
        spanMascotaJugador.innerHTML = inputHipodoge.id
    }else if (inputCapipepo.checked == true ){
        spanMascotaJugador.innerHTML = inputCapipepo.id
    }else if (inputRatigueya.checked == true ){
        spanMascotaJugador.innerHTML = inputRatigueya.id
    }else {
        alert('No has seleccionado ninguna mascota')
    }
    mascotaJugador = spanMascotaJugador.innerHTML

    if ( (inputHipodoge.checked == true ) || (inputCapipepo.checked == true ) || (inputRatigueya.checked == true ) ){
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionSeleccionarMascota.style.display = 'none'
        
        extraerAtaques(mascotaJugador)
        seleccionarMascotaEnemigo()
    }
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataques) => {
        ataquesMokepon = `
        <button id=${ataques.id} class="btn-ataques" > ${ataques.nombre} </button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
     botonFuego = document.getElementById('boton-ataque-fuego')
    botonAgua = document.getElementById('boton-ataque-agua')
    botonTierra = document.getElementById('boton-ataque-tierra')
    botones = document.querySelectorAll('.btn-ataques')

    
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e);
            if (e.target.textContent === ' 🔥 ') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.display = 'none'
            } else if (e.target.textContent === ' 🌊 ') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.display = 'none'
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.display = 'none'
            }
            seleccionAtaqueEnemigo()
        })
    });
    
}

function seleccionarMascotaEnemigo(){
    let seleccionMascota = randomNum(0,mokepones.length - 1)
    

    spanMascotaEnemigo.innerHTML = mokepones[seleccionMascota].nombre
    ataquesMokeponEnemigo = mokepones[seleccionMascota].ataques
    secuenciaAtaques()
}

function seleccionAtaqueEnemigo(){
    ataqueAleatorioEnemigo = randomNum(0, ataquesMokeponEnemigo.length -1 )

    if (ataqueAleatorioEnemigo == 0 || ataqueAleatorioEnemigo == 1){
        ataqueEnemigo.push('Fuego')
    } else if (ataqueAleatorioEnemigo == 3 || ataqueAleatorioEnemigo == 4){
        ataqueEnemigo.push('Agua')
    } else{
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueAleatorioEnemigo);
    
}

function iniciarPelea() {
    if (ataqueJugador.legnth === 5) {
        combate()
    }
    
}

function combate(){

    for (let i = 0; i < ataqueJugador.legnth; i++) {
        console.log(ataqueJugador[i]);
        if (ataqueJugador[i] == ataqueEnemigo[i]){
            resultadoPelea = 'EMPATE'
            crearMensajes()
        } else if ((ataqueJugador[i] == 'Fuego' && ataqueEnemigo[i] == 'Tierra')  || (ataqueJugador[i] == 'Tierra' && ataqueEnemigo[i] == 'Agua') || (ataqueJugador[i] == 'Agua' && ataqueEnemigo[i] == 'Fuego')){
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
    }

    

    revisarVidas()
}

function revisarVidas(){

    let mensajeVidas = document.createElement('p')

    if (vidasEnemigo == 0 || vidasJugador == 0){
        botonFuego.disabled = true
        botonAgua.disabled = true
        botonTierra.disabled = true

        if (vidasEnemigo == 0){
            mensajeVidas.innerHTML = 'Gana el Jugador'
            sectionReiniciar.insertBefore(mensajeVidas,divReferencia)
        } else if (vidasJugador == 0){
            mensajeVidas.innerHTML = 'Gana la Máquina'
            sectionReiniciar.insertBefore(mensajeVidas,divReferencia)
        }
        sectionReiniciar.style.display = 'flex'
    }
}

function crearMensajes(){
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