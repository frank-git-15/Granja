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
var pollo=
{
  url:"pollo.png",
  carga:false
}
var vaca=
{
  url:"vaca.png",
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

vaca.imagen=new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener('load',cargarVaca);

pollo.imagen=new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener('load',cargarPollo);

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
function cargarVaca()
{
    vaca.carga=true;
    dibujar();
}
function cargarPollo()
{
    pollo.carga=true;
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
  if(pollo.carga)
  {
    lienzo.drawImage(pollo.imagen,150,200);
  }
  if(vaca.carga)
  {
    lienzo.drawImage(vaca.imagen,200,200);
  }


}
