//VOY A IR ESCRIBIENDO LAS VARIABLES EN ESPAÑOL, Y LAS LLAMADAS
//AL HTML EN INGLES, PARA ASÍ GUIARME POR DONDE VOY


//Guardo el botón01 de la pantalla01 en una constante
const boton01Pantalla01 = document.getElementById('button01Screen01');

//Construyo el evento que cambia de la pantalla 01 a la pantalla 02
boton01Pantalla01.addEventListener('click', () => {
    document.getElementById("screen01").style.display = "none";
    document.getElementById("screen02").style.display = "block";
})