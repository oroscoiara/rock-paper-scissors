let puntajeUser = document.querySelector(".puntaje-user p")
let puntosUser = 0;

let puntajeComputer = document.querySelector(".puntaje-computer p")
let puntosComputer = 0;

let botonPiedra = document.querySelector(".piedra")
let botonPapel = document.querySelector(".papel")
let botonTijera = document.querySelector(".tijera")

let resultadoTexto = document.querySelector(".resultado")

let eleccionComputer = "";
let eleccionUser = "";

let manoUser = document.querySelector(".mano-user")
let manoComputer = document.querySelector(".mano-computer")

let tablero = document.querySelector(".tablero")

const obtenerEleccionComputer = () => {
    let numeroAlAzar = Math.floor(Math.random() * 3)
    
    if (numeroAlAzar == 0) {
        eleccionComputer = "piedra"
        manoComputer.src = "./assets/rock-computer.png"
    }
    else if (numeroAlAzar == 1) {
        eleccionComputer = "papel"
        manoComputer.src = "./assets/paper-computer.png"
    }
    else {
        eleccionComputer = "tijera"
        manoComputer.src = "./assets/scissor-computer.png"
    }
    console.log(eleccionComputer)
}

const decidirPuntaje = () => {
    if (eleccionComputer == "piedra") {

        if (eleccionUser == "piedra") {
            resultadoTexto.textContent = "Es un empate"
        }
    
        else if (eleccionUser == "papel") {
            resultadoTexto.textContent = 
            puntosUser++
            puntajeUser.textContent = puntosUser;
            resultadoTexto.textContent = "¡Has ganado!"
        }
        else {
            puntosComputer++
            puntajeComputer.textContent = puntosComputer;
            resultadoTexto.textContent = "Has perdido, inténtalo de nuevo"
        }
    }

    if (eleccionComputer == "papel") {

        if (eleccionUser == "papel") {
            resultadoTexto.textContent = "Es un empate"
        }
    
        else if (eleccionUser == "tijera") {
            resultadoTexto.textContent = 
            puntosUser++
            puntajeUser.textContent = puntosUser;
            resultadoTexto.textContent = "¡Has ganado!"
        }
        else {
            puntosComputer++
            puntajeComputer.textContent = puntosComputer;
            resultadoTexto.textContent = "Has perdido, inténtalo de nuevo"
        }
    }

    if (eleccionComputer == "tijera") {

        if (eleccionUser == "tijera") {
            resultadoTexto.textContent = "Es un empate"
        }
    
        else if (eleccionUser == "piedra") {
            puntosUser++
            puntajeUser.textContent = puntosUser;
            resultadoTexto.textContent = "¡Has ganado!"
        }
        else {
            puntosComputer++
            puntajeComputer.textContent = puntosComputer;
            resultadoTexto.textContent = "Has perdido, inténtalo de nuevo"
        }
    }
}
        
botonPiedra.onclick = () => {
    resultadoTexto.textContent = "A jugar"
    manoUser.src = "./assets/rock-user.png"
    manoComputer.src = "./assets/rock-computer.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUser = "piedra";
        manoUser.src = "./assets/rock-user.png"
        obtenerEleccionComputer();
        decidirPuntaje();
    }, 2000)
    
}
  
botonPapel.onclick = () => {
    resultadoTexto.textContent = "A jugar"
    manoUser.src = "./assets/rock-user.png"
    manoComputer.src = "./assets/rock-computer.png"
    tablero.classList.add("jugando");
    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUser = "papel";
        manoUser.src = "./assets/paper-user.png"
        obtenerEleccionComputer();
        decidirPuntaje();
    }, 2000)
}
  
botonTijera.onclick = () => {
    resultadoTexto.textContent = "A jugar"
    manoUser.src = "./assets/rock-user.png"
    manoComputer.src = "./assets/rock-computer.png"
    tablero.classList.add("jugando");

    setTimeout(() => {
        tablero.classList.remove("jugando");
        eleccionUser = "tijera";
        manoUser.src = "./assets/scissor-user.png"
        obtenerEleccionComputer(); 
        decidirPuntaje();
    }, 2000)
}