let botonIniciarJuego = document.getElementById("boton_jugar");

botonIniciarJuego.addEventListener("click", juego);

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "piedra 🥌"
    } else if(jugada == 2){
        resultado = "papel 📄"
    } else if(jugada == 3){
        resultado = "tijera ✂"
    } else{
        resultado = "incorrecta"
    }
    return resultado;
}

function juego () {
    while (triunfos < 3 && perdidas < 3){
        pc = aleatorio (1,3);
        jugador = prompt("Elige una opción: \n1 para 🥌 \n2 para 📄 \n3 para ✂");
        alert("Tu elección es: " + eleccion(jugador));
        alert("PC elegio: " + eleccion(pc));
        
        if(jugador == pc){
            alert("EMPATE")
            empates = empates
        }
        else if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2){
            alert("GANASTE")
            triunfos = triunfos + 1
        }
        else{
            alert("PERDISTE")
            perdidas = perdidas + 1
        }
    }
    document.getElementById("mensaje").innerHTML = ("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
    botonIniciarJuego.disabled = true;
}



function aleatorio (min, max) {
    return Math.floor (Math.random() * (max- min + 1) + min)
}

