let arr = ['img/uno.jpeg', 'img/dos.jpeg', 'img/tres.jpeg', 'img/ultima.jpeg', 'img/kanban.jpg', 'img/kanban_guide_print_KPO_bleed_121.jpg'];
let imagen = document.getElementById('imagen');
let contador = document.getElementById('contador');

function funcion(a){
    imagen.setAttribute('src', arr[a]);
    contador.style.display= 'block';
}
function ejecutar(){
    contador.style.display = 'none';
}