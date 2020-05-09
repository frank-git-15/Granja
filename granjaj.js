var g=document.getElementById('granja');
var lienzo=g.getContext('2d');
console.log(lienzo);

var fondo=
{
  url:"granja.png",
  carga:false
}
var cerdo=
{
  url:"cerdo.png",
  carga:false
}

//Aqui se genera un variable tipo Image y se guarda logicamente en el vector JSON
//y con esto podemos ubicar la imagen de fondo invocando fondo.imagen
fondo.imagen=new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

cerdo.imagen=new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener('load',cargarCerdo);

function cargarFondo()
{
    fondo.carga=true;
    dibujar();
}
function cargarCerdo()
{
    cerdo.carga=true;
    dibujar();
}
function dibujar()
{
  if(fondo.carga)
  {
    lienzo.drawImage(fondo.imagen,0,0);
  }
  if(cerdo.carga)
  {
    lienzo.drawImage(cerdo.imagen,100,200);
  }

}
