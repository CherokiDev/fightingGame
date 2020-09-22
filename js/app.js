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

//Construyo los eventos que tienen lugar al pasar el mouse por encima de gridPlayer01Slot01
gridJugador01Casilla02.addEventListener('mouseenter', () => {
    document.getElementById('imgPlayer01').classList.add('imgPlayer01Slot02');
    document.getElementById('statsPlayer01').classList.add('statsPlayer01Slot02');
})

//y estos eventos devuelven todo a su estado original al quitar el mouse de encima
gridJugador01Casilla02.addEventListener('mouseleave', () => {
    document.getElementById('imgPlayer01').classList.remove('imgPlayer01Slot02')
    document.getElementById('statsPlayer01').classList.remove('statsPlayer01Slot02')
})

//TENGO QUE PROBAR SI CON EL CLICK SIGUE HACIENDO EFECTO EL MOUSEENTER
//ANTES DE METERLE MOUSEENTER A TODAS LOS PLAYERS
//ES DECIR, QUE AL SELECCIONAR UN PLAYER, SI PASO EL RATON POR ENCIMA DE OTRO
//ÉSTE SIGUE RECIBIENDO LOS EFECTOS DE PASAR EL RATON POR ENCIMA
