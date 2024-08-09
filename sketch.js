let xb = 300;
let yb =200;
let diametro = 40;
let raio = diametro/2;
let vxb = 8;
let vyb = 8;

let raquete1
let raquete2
let bola

let xr = 5;
let yr = 150;
let lr = 85;
let ar = 180;

let xri = 525;
let yri = 150;

let colidiu = false;

let meuspontos = 0;
let pontosoponente = 0;

let trilha;
let meuponto;
let pontooponente;
let raquetada;
let musicameuponto;
let musicapontooponentemusica
let fundo

function preload(){
  meuponto =  loadSound("meu ponto.wav")
  pontooponente =  loadSound("ponto oponente.wav")
 raquetada = loadSound("raquetada.mp3")
  raquete1 = loadImage("raquete1.png");
  raquete2= loadImage("raquete2.png");
  bola = loadImage("bola.png")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("black");
  mostrabola();
  mostraraquete();
  mostraraqueteinimiga();
  mexebola();
  quicabola();
  mexeraquete();
  mexeraqueteinimiga();
  quicaraquetebola(xr,yr);
  quicaraquetebola(xri,yri);
  placar();
  pontos();
  letras();
  stroke("rgb(77,77,77)");
  rect(300,0, 1, 600);
}

function mostrabola(){
  image(bola, xb, yb, diametro, diametro);
}

function mostraraquete(){
  image(raquete1, xr, yr, lr, ar);
}

function mostraraqueteinimiga(){
  image(raquete2, xri, yri, lr, ar);
}

function mexebola(){
  xb += vxb;
  yb += vyb; 
}

function quicabola(){
  
  if (xb + raio > width || xb - raio < 0){
    vxb *= -1;
  }
  if (yb + raio > height || yb - raio < 0){
    vyb *= -1;
  }
}

function mexeraquete(){
  if(keyIsDown(UP_ARROW))
    yr -= 10;
  
  if(keyIsDown(DOWN_ARROW))
    yr += 10;
}

function mexeraqueteinimiga(){
  if(keyIsDown(87)) 
    yri -= 10;
  
  if(keyIsDown(83)) 
    yri += 10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle (x,y,lr,ar,xb,yb,raio)
  
  if (colidiu){
    vxb *= -1;
    raquetada.play ();
  }
}
function placar(){
  stroke("black");
  textAlign(CENTER);
  textSize(18);
  fill("#673AB7")
  rect(150,10,40,20);
  fill("black");
  text(meuspontos, 170, 13);
  
  fill("#C878D6")
  rect(430,10,40,20);
  fill("black");
   textAlign(CENTER);
  textSize(18);
  text(pontosoponente, 450, 13);
}

function pontos(){
  if (xb > 580){
    meuspontos += 1;
  }
  if (xb < 20){
    pontosoponente += 1;
    
  }
}

function letras(){
  let frase = "MEUS PONTOS";
  let frase2 = "PONTOS OPONENTE";
  textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase, 90, 40);
  
  textSize(20);
  textAlign(LEFT,TOP);
  fill("white");
  text(frase2, 335,40)
}



