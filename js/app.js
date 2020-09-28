// Creación de clases
class Personajes {
    constructor(nombre, vida, fuerza, defensa, imagenAtacando, imagenDefensa){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.imagenAtacando = imagenAtacando;
        this.imagenDefensa =imagenDefensa;
    }

    // Función que realiza el ataque del pj1 al pj2
    botonAtaquePlayer01(){
        let diferenciaStatsBoton1 = player1seleccion.fuerza - player2seleccion.defensa;
        player2seleccion.vida -= diferenciaStatsBoton1
        document.getElementById('screen03LifePlayer02').style.width = player2seleccion.vida + "%";
        document.getElementById('screen03Player01Zone').style.backgroundImage = player1seleccion.imagenAtacando;
        document.getElementById('screen03Player02Zone').style.backgroundImage = player2seleccion.imagenDefensa;
        document.getElementById('journal').innerHTML = `El jugador ${player2seleccion.nombre} ha recibido ${diferenciaStatsBoton1} de daño.`

        if(player2seleccion.vida <= 0){
            document.getElementById('screen03').style.display = "none";
            document.getElementById('screen04').style.display = "block";
            document.getElementById("player01Win").innerHTML = `Ha vencido el jugador ${player1seleccion.nombre}`;

        }
    return;
    }

    // Función que realiza el ataque del pj2 al pj1
    botonAtaquePlayer02(){
        let diferenciaStatsBoton2 = player2seleccion.fuerza - player1seleccion.defensa;
        player1seleccion.vida -= diferenciaStatsBoton2
        document.getElementById('screen03LifePlayer01').style.width = player1seleccion.vida + "%";
        document.getElementById('screen03Player02Zone').style.backgroundImage = player2seleccion.imagenAtacando;
        document.getElementById('screen03Player01Zone').style.backgroundImage = player1seleccion.imagenDefensa;
        document.getElementById('journal').innerHTML = `El jugador ${player1seleccion.nombre} ha recibido ${diferenciaStatsBoton2} de daño.`
    
        if(player1seleccion.vida <= 0){
            document.getElementById('screen03').style.display = "none";
            document.getElementById('screen04').style.display = "block";
            document.getElementById("player02Win").innerHTML = `Ha vencido el jugador ${player2seleccion.nombre}`;
        }
    return;
    }

}

// Creación de personajes
const pers1 = new Personajes("Son Goku",100,95,75, "url(img/fighting/gokuAttack01.gif)", "url(img/fighting/gokuDefense01.gif)");
const pers2 = new Personajes("Son Gohan",100,90,70, "url(img/fighting/gohanAttack01.gif)", "url(img/fighting/gohanDefense01.gif)");
const pers3 = new Personajes("Vegeta",100,85,65, "url(img/fighting/vegetaAttack01.gif)", "url(img/fighting/vegetaDefense01.gif)");
const pers4 = new Personajes("Krillin", 100,80,50, "url(img/fighting/krillinAttack01.gif)", "url(img/fighting/krillinDefense01.gif)");
const pers5 = new Personajes("Freezer", 100,80,65, "url(img/fighting/freezerAttack01.gif)", "url(img/fighting/freezerDefense01.gif)");
const pers6 = new Personajes("Cell",100,90,70, "url(img/fighting/cellAttack01.gif)", "url(img/fighting/cellDefense01.gif)");
const pers7 = new Personajes("Majin Buu",100,85,55, "url(img/fighting/majinBuuAttack01.gif)", "url(img/fighting/majinBuuDefense01.gif)");
const pers8 = new Personajes("Broly", 100,95,70, "url(img/fighting/brolyAttack01.gif)", "url(img/fighting/brolyDefense01.gif)");

// Variables para asignar los personajes a sus respectivos players
let player1seleccion;
let player2seleccion;

const activeButtomPlayer01 = document.getElementById('attackPlayer01');
const activeButtomPlayer02 = document.getElementById('attackPlayer02');

// desactiva el botón de ataque del jugador 1 hasta que ataca el jugador 2
activeButtomPlayer01.addEventListener('click', () => {
    if(activeButtomPlayer01.disabled = true){
        document.getElementById('attackPlayer02').disabled = false;
        document.getElementById('attackPlayer01').style.backgroundImage = "url('img/buttonAttackOff.png')";
        document.getElementById('attackPlayer02').style.backgroundImage = "url('img/buttonAttackOn.png')";
    }
})

// desactiva el botón de ataque del jugador 2 hasta que ataca el jugador 1
activeButtomPlayer02.addEventListener('click', () => {
    if(activeButtomPlayer02.disabled = true){
        document.getElementById('attackPlayer01').disabled = false;
        document.getElementById('attackPlayer02').style.backgroundImage = "url('img/buttonAttackOff.png')";
        document.getElementById('attackPlayer01').style.backgroundImage = "url('img/buttonAttackOn.png')";
    }
})
const selectPersonaje = (nombre, jugador) => {

    let preSeleccion;
    switch(nombre){
        case "goku":
            preSeleccion = pers1;
            document.getElementById("namePlayer01").innerHTML = "Son Goku";
            document.getElementById('screen03Player01Zone').style.backgroundImage = "url(img/fighting/gokuStart01.gif)";
        break;

        case "gohan":
            preSeleccion = pers2;
            document.getElementById("namePlayer01").innerHTML = "son Gohan";
            document.getElementById('screen03Player01Zone').style.backgroundImage = "url(img/fighting/gohanStart01.gif)";
        break;

        case "vegeta":
            preSeleccion = pers3;
            document.getElementById("namePlayer01").innerHTML = "Vegeta";
            document.getElementById('screen03Player01Zone').style.backgroundImage = "url(img/fighting/vegetaStart01.gif)";
        break;

        case "krillin":
            preSeleccion = pers4;
            document.getElementById("namePlayer01").innerHTML = "Krillin";
            document.getElementById('screen03Player01Zone').style.backgroundImage = "url(img/fighting/krillinStart01.gif)";
        break;

        case "freezer":
            preSeleccion = pers5;
            document.getElementById("namePlayer02").innerHTML = "Freezer";
            document.getElementById('screen03Player02Zone').style.backgroundImage = "url(img/fighting/freezerStart01.gif)";
        break;

        case "cell":
            preSeleccion = pers6;
            document.getElementById("namePlayer02").innerHTML = "Cell";
            document.getElementById('screen03Player02Zone').style.backgroundImage = "url(img/fighting/cellStart01.gif)";
        break;

        case "buu":
            preSeleccion = pers7;
            document.getElementById("namePlayer02").innerHTML = "Majin Buu";
            document.getElementById('screen03Player02Zone').style.backgroundImage = "url(img/fighting/majinBuuStart01.gif)";
        break;

        case "broly":
            preSeleccion = pers8;
            document.getElementById("namePlayer02").innerHTML = "Broly";
            document.getElementById('screen03Player02Zone').style.backgroundImage = "url(img/fighting/brolyStart01.gif)";
        break;
    }

    jugador === 1 ? player1seleccion = preSeleccion : player2seleccion = preSeleccion; 
}

//Guardo fightRow04 en una constante
const fight = document.getElementById('fightRow04');

//Construyo el evento que cambia de la pantalla 02 a la pantalla 03
fight.addEventListener('click', () => {
    if (player1seleccion && player2seleccion){
        document.getElementById('screen02').style.display = "none";
        document.getElementById('screen03').style.display = "block";
        document.getElementById("screen03LifePlayer01").innerHTML = `${player1seleccion.nombre}`
        document.getElementById("screen03LifePlayer02").innerHTML = `${player2seleccion.nombre}`

        // Countdown
        let timeleft = 99;
        let downloadTimer = setInterval(function(){
            if(timeleft <= 0){
                clearInterval(downloadTimer);
                document.getElementById("screen03Timer").innerHTML = "End";
            } else {
                document.getElementById("screen03Timer").innerHTML = timeleft;
            }
            timeleft -= 1;
            }, 1000);

        let random = Math.floor(Math.random() * 9) + 0;
        let bigSize = ["url('img/scenes/scene01.jpg')",
                        "url('img/scenes/scene02.jpg')",
                        "url('img/scenes/scene03.png')",
                        "url('img/scenes/scene04.png')",
                        "url('img/scenes/scene05.jpg')",
                        "url('img/scenes/scene06.png')",
                        "url('img/scenes/scene07.jpg')",
                        "url('img/scenes/scene08.jpg')",
                        "url('img/scenes/scene09.jpg')"];
        document.getElementById("screen03").style.backgroundImage=bigSize[random];
    
    }else if(!player1seleccion){
        document.getElementById("namePlayer01").innerHTML = "Select Player!";

    }else if(!player2seleccion){
        document.getElementById("namePlayer02").innerHTML = "Select Player!";
    }  
})

//Guardo reset en una constante
const reset = document.getElementById('reset');

//Construyo el evento que cambia de la pantalla 04 a la pantalla 01
reset.addEventListener('click', () => {
    window.location.reload();
})

//Guardo buttonScreen01 en una constante
const boton01Pantalla01 = document.getElementById('button01Screen01');

//Construyo el evento que cambia de la pantalla 01 a la pantalla 02
boton01Pantalla01.addEventListener('click', () => {
    document.getElementById('screen01').style.display = "none";
    document.getElementById('screen02').style.display = "block";
})

//Función para cambiar de imagen y stats al pasar el mouse por encima del slot del jugador
const animacionParrillaPlayer = (gridPlayer,imgPlayer,imgPlayerSlot,statsPlayer,statsPlayerSlot,pers) => {
    document.getElementById(gridPlayer).addEventListener('mouseenter', () =>{
        document.getElementById(imgPlayer).classList.add(imgPlayerSlot);
        document.getElementById(statsPlayer).classList.add(statsPlayerSlot);
        document.getElementById(statsPlayer).innerHTML = 
        `
        Vida: ${pers.vida}<br>
        Fuerza: ${pers.fuerza}<br>
        Defensa: ${pers.defensa}
        `
    })
    document.getElementById(gridPlayer).addEventListener('mouseleave', () => {
        document.getElementById(imgPlayer).classList.remove(imgPlayerSlot)
        document.getElementById(statsPlayer).classList.remove(statsPlayerSlot)
    })
}

let goku = animacionParrillaPlayer('gridPlayer01Slot01','imgPlayer01','imgPlayer01Slot01','statsPlayer01','statsPlayer01Slot01',pers1);
let gohan = animacionParrillaPlayer('gridPlayer01Slot02','imgPlayer01','imgPlayer01Slot02','statsPlayer01','statsPlayer01Slot02',pers2);
let vegeta = animacionParrillaPlayer('gridPlayer01Slot03','imgPlayer01','imgPlayer01Slot03','statsPlayer01','statsPlayer01Slot03',pers3);
let krillin = animacionParrillaPlayer('gridPlayer01Slot04','imgPlayer01','imgPlayer01Slot04','statsPlayer01','statsPlayer01Slot04',pers4);
let freezer = animacionParrillaPlayer('gridPlayer02Slot01','imgPlayer02','imgPlayer02Slot01','statsPlayer02','statsPlayer02Slot01',pers5);
let cell = animacionParrillaPlayer('gridPlayer02Slot02','imgPlayer02','imgPlayer02Slot02','statsPlayer02','statsPlayer02Slot02',pers6);
let majinBuu = animacionParrillaPlayer('gridPlayer02Slot03','imgPlayer02','imgPlayer02Slot03','statsPlayer02','statsPlayer02Slot03',pers7);
let broly = animacionParrillaPlayer('gridPlayer02Slot04','imgPlayer02','imgPlayer02Slot04','statsPlayer02','statsPlayer02Slot04',pers8);