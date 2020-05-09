var g=document.getElementById('granja');
var lienzo=g.getContext('2d');
console.log(lienzo);

var fondo=
{
  url:"granja.png",
  carga:false
}

//Aqui se genera un variable tipo Image y se guarda logicamente en el vector JSON
//y con esto podemos ubicar la imagen de fondo invocando fondo.imagen
fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

function cargarFondo()
{
    fondo.carga=true
    dibujar()
}
function dibujar()
{
  lienzo.drawImage(fondo.imagen,0,0);
}
