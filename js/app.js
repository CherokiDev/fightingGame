//VOY A IR ESCRIBIENDO LAS VARIABLES EN ESPAÑOL, Y LAS LLAMADAS
//AL HTML EN INGLES, PARA ASÍ GUIARME POR DONDE VOY


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