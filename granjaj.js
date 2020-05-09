var g=document.getElementById('granja');
var lienzo=g.getContext('2d');
document.addEventListener("keydown",moverCerdo);
console.log(lienzo);
var vacasC=aleatorio(1,5);//Enesta linea se genera cuantas vacas se vana dibujar
var pollosC=aleatorio(1,5);//Enesta linea se genera cuantos pollos se vana dibujar
var cerdosC=aleatorio(1,5);//Enesta linea se genera cuantos cerdos se vana dibujar
var fondo=
{
  url:"granja.png",
  carga:false
}
var cerdo=
{
  url:"cerdo.png",
  carga:false,
  x:0,
  y:0
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
var teclas=
{
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
}
cerdo.x=(aleatorio(0,7))*60;
cerdo.y=(aleatorio(0,7))*60;
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
    //console.log("Cerdo x"+cerdo.x);
    //console.log("Cerdo y"+cerdo.y);
    lienzo.drawImage(cerdo.imagen,cerdo.x,cerdo.y);
  }
  if(pollo.carga)
  {
    console.log("Pollos "+pollosC);
    for(var i=0;i<pollosC;i++)
    {
      var x=aleatorio(0,6);
      var y=aleatorio(0,6);
      x=x*71;
      y=y*71;
      lienzo.drawImage(pollo.imagen,x,y);
    }
  }
  if(vaca.carga)
  {
    console.log("Vacas "+vacasC);
    for(var i=0;i<vacasC;i++)
    {
      var x=aleatorio(0,6);
      var y=aleatorio(0,6);
      x=x*71;
      y=y*71;
      lienzo.drawImage(vaca.imagen,x,y);
    }
  }
}
function moverCerdo(e) {
  switch (e.keyCode) {
    case teclas.UP:
      console.log("UP");
      break;
    case teclas.DOWN:
      console.log("DOWN");
      break;
    case teclas.LEFT:
      console.log("LEFT");
      break;
    case teclas.RIGHT:
      console.log("RIGHT");
      break;
    default:
      console.log(e.key);
      break;

  }
}

function aleatorio(min,max)
{
  var resultado;
  resultado=Math.floor(Math.random()*(max-min+1))+min;
  return resultado;
}
