var pokemon,pokemon_running,pokemon_img;
var powercoins;
var obstical;
var life;
var ground,ground_img;
var bg;

function preload(){
pokemon_running=loadAnimation("pokemon-img-1.png","pokemon-img-2.png");
bg=loadImage("bg.jpg");
ground_img=loadImage("ground.jpg");
}

function setup() {
  createCanvas(1100,700);
 pokemon= createSprite(400, 500, 50, 50);
pokemon.addAnimation("running",pokemon_running);
 ground=createSprite(100,680,1100,30);
 
}



function draw() {
  background(bg);  
  drawSprites();
}