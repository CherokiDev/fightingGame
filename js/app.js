//VOY A IR ESCRIBIENDO LAS VARIABLES EN ESPAÑOL, Y LAS LLAMADAS
//AL HTML EN INGLES, PARA ASÍ GUIARME POR DONDE VOY


// Creación de clases
class Personajes {
    constructor(nombre, vida, fuerza, defensa){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
    }

    // Función que realiza el ataque del pj1 al pj2
    botonAtaquePlayer01(){
        let diferenciaStatsBoton1 = player1seleccion.fuerza - player2seleccion.defensa;
        player2seleccion.vida -= diferenciaStatsBoton1
        document.getElementById("statsPlayer01Screen03").innerHTML = `La vida de ${player2seleccion.nombre} es ${player2seleccion.vida}`
        


        if(player2seleccion.vida <= 0){
            document.getElementById('screen03').style.display = "none";
            document.getElementById('screen04').style.display = "block";
            document.getElementById('player01Win').innerHTML = (`Ha vencido el jugador ${player1seleccion.nombre}`)

        }
    return;
    }

    // Función que realiza el ataque del pj2 al pj1
    botonAtaquePlayer02(){
        let diferenciaStatsBoton2 = player2seleccion.fuerza - player1seleccion.defensa;
        player1seleccion.vida -= diferenciaStatsBoton2
        document.getElementById("statsPlayer02Screen03").innerHTML = `La vida ${player1seleccion.nombre} es de ${player1seleccion.vida}`
        if(player1seleccion.vida <= 0){
            document.getElementById('screen03').style.display = "none";
            document.getElementById('screen04').style.display = "block";
            document.getElementById('player02Win').innerHTML = (`Ha vencido el jugador ${player2seleccion.nombre}`)
        }
    return;
    }

}


// Creación de personajes
const pers1 = new Personajes("Son Goku",100,90,60);
const pers2 = new Personajes("Son Gohan",100,80,75);
const pers3 = new Personajes("Vegeta",100,80,60);
const pers4 = new Personajes("Krillin", 100,80,50,);
const pers5 = new Personajes("Freezer", 100,85,75,);
const pers6 = new Personajes("Cell",100,95,70);
const pers7 = new Personajes("Majin Buu",100,85,55);
const pers8 = new Personajes("Broly", 100,95,75);



// Variables para asignar luego los personajes a sus respectivos players
let player1seleccion;
let player2seleccion;




const activeButtomPlayer01 = document.getElementById('attackPlayer01');
const activeButtomPlayer02 = document.getElementById('attackPlayer02');

// desactiva el botón de ataque del jugador 1 hasta que ataca el jugador 2
activeButtomPlayer01.addEventListener('click', () => {
    if(activeButtomPlayer01.disabled = true){
        document.getElementById('attackPlayer02').disabled = false;
    }
})

// desactiva el botón de ataque del jugador 2 hasta que ataca el jugador 1
activeButtomPlayer02.addEventListener('click', () => {
    if(activeButtomPlayer02.disabled = true){
        document.getElementById('attackPlayer01').disabled = false;
    }
    
})






const selectPersonaje = (nombre, jugador) => {


    let preSeleccion;
    switch(nombre){
        case "goku":
            preSeleccion = pers1;
            document.getElementById("namePlayer01").innerHTML = "Son Goku";
        break;

        case "gohan":
            preSeleccion = pers2;
            document.getElementById("namePlayer01").innerHTML = "son Gohan";
        break;

        case "vegeta":
            preSeleccion = pers3;
            document.getElementById("namePlayer01").innerHTML = "Vegeta";
        break;

        case "krillin":
            preSeleccion = pers4;
            document.getElementById("namePlayer01").innerHTML = "Krillin";
        break;

        case "freezer":
            preSeleccion = pers5;
            document.getElementById("namePlayer02").innerHTML = "Freezer";
        break;

        case "cell":
            preSeleccion = pers6;
            document.getElementById("namePlayer02").innerHTML = "Cell";
        break;

        case "buu":
            preSeleccion = pers7;
            document.getElementById("namePlayer02").innerHTML = "Majin Buu";
        break;

        case "broly":
            preSeleccion = pers8;
            document.getElementById("namePlayer02").innerHTML = "Broly";
        break;

    }

    /*jugador === 1 ? player1seleccion = preSeleccion : player2seleccion = preSeleccion; */

    if(jugador === 1){
        player1seleccion = preSeleccion;
    }else{
        player2seleccion = preSeleccion;
    }



    console.log(player1seleccion, player2seleccion)/* lo tengo que borrar */
}


//Guardo fightRow04 en una constante
const fight = document.getElementById('fightRow04');

//Construyo el evento que cambia de la pantalla 02 a la pantalla 03
fight.addEventListener('click', () => {
    if (player1seleccion && player2seleccion){
        document.getElementById('screen02').style.display = "none";
        document.getElementById('screen03').style.display = "block";
        
    }else{alert("Debes seleccionar ambos personajes");
    }
    
})





//Guardo reset en una constante
const reset = document.getElementById('reset');

//Construyo el evento que cambia de la pantalla 01 a la pantalla 02
reset.addEventListener('click', () => {
    window.location.reload();
})
















/*
 FALTA POR HACER
 ---añadir imágenes al hacer clic en el jugador
    o bien    ---pintar "seleccionado" o un background-color sobre el slot del jugador
 ---añadir posibilidad de tomar una cura (habichuela mágica)
 ---añadir setTimeOut para pasar a la lucha
 ---añadir setTimeOut a la primera pantalla como si estuviera cargando la consola
 ---pintar stats pero no con imágenes
 ---intentar mejorar el código
 ---ordenar el código
 ---poner de fondo en la screen02 la imagen del dragon shenron
 ---añadir efecto de super saiyan al slot al ser seleccionado

*/















//Guardo buttonScreen01 en una constante
const boton01Pantalla01 = document.getElementById('button01Screen01');

//Construyo el evento que cambia de la pantalla 01 a la pantalla 02
boton01Pantalla01.addEventListener('click', () => {
    document.getElementById('screen01').style.display = "none";
    document.getElementById('screen02').style.display = "block";
})


//Guardo gridPlayer01Slot01 en una constante
const gridJugador01Casilla01 = document.getElementById('gridPlayer01Slot01');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer01Slot01
gridJugador01Casilla01.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer01').classList.add('imgPlayer01Slot01');
    document.getElementById('statsPlayer01').classList.add('statsPlayer01Slot01');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador01Casilla01.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer01').classList.remove('imgPlayer01Slot01')
    document.getElementById('statsPlayer01').classList.remove('statsPlayer01Slot01')
})


//Guardo gridPlayer01Slot02 en una constante
const gridJugador01Casilla02 = document.getElementById('gridPlayer01Slot02');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer01Slot02
gridJugador01Casilla02.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer01').classList.add('imgPlayer01Slot02');
    document.getElementById('statsPlayer01').classList.add('statsPlayer01Slot02');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador01Casilla02.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer01').classList.remove('imgPlayer01Slot02')
    document.getElementById('statsPlayer01').classList.remove('statsPlayer01Slot02')
})


//Guardo gridPlayer01Slot03 en una constante
const gridJugador01Casilla03 = document.getElementById('gridPlayer01Slot03');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer01Slot03
gridJugador01Casilla03.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer01').classList.add('imgPlayer01Slot03');
    document.getElementById('statsPlayer01').classList.add('statsPlayer01Slot03');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador01Casilla03.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer01').classList.remove('imgPlayer01Slot03')
    document.getElementById('statsPlayer01').classList.remove('statsPlayer01Slot03')
})


//Guardo gridPlayer01Slot04 en una constante
const gridJugador01Casilla04 = document.getElementById('gridPlayer01Slot04');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer01Slot04
gridJugador01Casilla04.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer01').classList.add('imgPlayer01Slot04');
    document.getElementById('statsPlayer01').classList.add('statsPlayer01Slot04');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador01Casilla04.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer01').classList.remove('imgPlayer01Slot04')
    document.getElementById('statsPlayer01').classList.remove('statsPlayer01Slot04')
})


//Guardo gridPlayer02Slot01 en una constante
const gridJugador02Casilla01 = document.getElementById('gridPlayer02Slot01');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer02Slot01
gridJugador02Casilla01.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer02').classList.add('imgPlayer02Slot01');
    document.getElementById('statsPlayer02').classList.add('statsPlayer02Slot01');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador02Casilla01.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer02').classList.remove('imgPlayer02Slot01')
    document.getElementById('statsPlayer02').classList.remove('statsPlayer02Slot01')
})


//Guardo gridPlayer02Slot02 en una constante
const gridJugador02Casilla02 = document.getElementById('gridPlayer02Slot02');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer02Slot02
gridJugador02Casilla02.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer02').classList.add('imgPlayer02Slot02');
    document.getElementById('statsPlayer02').classList.add('statsPlayer02Slot02');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador02Casilla02.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer02').classList.remove('imgPlayer02Slot02')
    document.getElementById('statsPlayer02').classList.remove('statsPlayer02Slot02')
})


//Guardo gridPlayer02Slot03 en una constante
const gridJugador02Casilla03 = document.getElementById('gridPlayer02Slot03');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer02Slot03
gridJugador02Casilla03.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer02').classList.add('imgPlayer02Slot03');
    document.getElementById('statsPlayer02').classList.add('statsPlayer02Slot03');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador02Casilla03.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer02').classList.remove('imgPlayer02Slot03')
    document.getElementById('statsPlayer02').classList.remove('statsPlayer02Slot03')
})


//Guardo gridPlayer02Slot04 en una constante
const gridJugador02Casilla04 = document.getElementById('gridPlayer02Slot04');

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer02Slot04
gridJugador02Casilla04.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer02').classList.add('imgPlayer02Slot04');
    document.getElementById('statsPlayer02').classList.add('statsPlayer02Slot04');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador02Casilla04.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer02').classList.remove('imgPlayer02Slot04')
    document.getElementById('statsPlayer02').classList.remove('statsPlayer02Slot04')
})




