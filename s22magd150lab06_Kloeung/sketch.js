var x
var y
var t
var scaler
var s
var yspeed
var randomx
var randomy
function setup() {
  createCanvas(400, 400);
  y = -20
  yspeed = 1
  x = random(0,width);
  t = random(0,2);
  scaler = [0.5,1,1.5];
  s = random(scaler);
  randomx= random(0,width);
  randomy= random(0,height);
  
}

function draw() {
  background(59, 0, 74);
  stars();
  smallplanet();
  planet();
  laser();
  ship();
  orbit();
  asteroid();

}

function ship(){
  noCursor();
  fill(255);
  noStroke();
  rectMode(CENTER);
  // This is the code to make the shape of the ship while keeping it constrained to the canvas.
  rect(constrain(mouseX,0,width),constrain(mouseY,0,height) +15,50,20);
  rect(constrain(mouseX,0,width),constrain(mouseY,0,height),10,50);
  rect(constrain(mouseX,0,width) +20,constrain(mouseY,0,height) +20,10,30);
  rect(constrain(mouseX,0,width) -20,constrain(mouseY,0,height) +20,10,30);
  rect(constrain(mouseX,0,width),constrain(mouseY,0,height),30,20)
}

function orbit(){
  push();
  //This created the orbiting bit around the ship.
  translate(p5.Vector.fromAngle(millis() / 1000, 100));
  rect(constrain(mouseX,0,width) , constrain(mouseY,0,height) , 20, 20);
  pop();
 
}

function laser(){
  //This if statement creats the laser and keeps it constrained to the canvas.
  if(mouseIsPressed==true){
    fill(255, 50, 43);
    rect(constrain(mouseX,0,width),constrain(mouseY,0,height) -200,10,400)
  }
}

function asteroid(){
  // This expression makes a hitbox for the asteroid and resets it if it goes off screen.
  if(mouseIsPressed==true && mouseX<x +25 && mouseX>x -25 && mouseY> y ||y==height +20){
    y= -50
  }
  fill(255);
  rect(x, y,50,50)
  y+= yspeed
  
}

function planet(){
  push();
  fill(102, 209, 255);
  //This part scales the size of the planet and places the planet in a random spot on the canvas.
  scale(s);
  rect(randomx, randomy, 100,100)
  pop();
}

function smallplanet(){
  push();
  noStroke();
  fill(255, 112, 179);
  //This expression creates and rotates the pink planet.
  angleMode(DEGREES);
  rotate(30);
  rect(200,200,100,20);
  fill(156, 28, 88);
  rect(200,200,40,40);
  pop();
}

function stars(){
  push();
  fill(255, 238, 112);
  rect(100,100,20,20);
  rect(325,220,20,20);
  rect(25,390,20,20);
  rect(250,300,20,20);
  rect(220,170,20,20);
  rect(380,40,20,20);
  pop(); 
}

