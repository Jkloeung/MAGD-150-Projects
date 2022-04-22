var power;
var x;
var xspeed;
var colorbutton;

function setup() {
  createCanvas(400, 400);
  
  power= true;
  x=60;
  xspeed= 5;
  colorbutton= false;
}

function draw() {
  background(140);
  
  //tv
  stroke(2);
  line(200,100,160,20);
  line(200,100,240,20);
  stroke(1);
  fill(90);
  rect(50,100,300,200,10,10,10,10);
  
  //power button
  fill(170,70,40);
  ellipse(325,150,20,20);
  if(mouseX>315 && mouseX<335 && mouseY>140 && mouseY<160){
    fill(255,70,40);
  ellipse(325,150,20,20);
  }
  
  //ball button
  fill (60,150,70);
  rect(315,200,20,20);
  if(mouseX>315 && mouseX<335 && mouseY>200 && mouseY<220){
    fill(60,240,70);
  rect(315,200,20,20);
  }
  
  //ball program
  fill(255);
  rect(60,110,240,180,20,20,20,20);
  
  
  fill(50,30,130);
  ellipse(x +20,200,20,20);
  
  if(colorbutton==true){
    fill(50,130,30);
  ellipse(x +20,200,20,20);
  }
  
  x+= xspeed;
  
  if (x>=270||x<60){
    xspeed *= -1;
  }
  if(mouseIsPressed){
    if(mouseX>315 && mouseX<335 && mouseY>140 && mouseY<160 && power==true){
      power=false;
  }
  }
  if(mouseIsPressed){
    if(mouseX>315 && mouseX<335 && mouseY>200 && mouseY<220){
    colorbutton=true;
  }
  }
  
  
  //black screen
  if(power== true){
  fill(0);
  rect(60,110,240,180,20,20,20,20);
  }
  
  push();
  fill(255);
  text('Power',310,170)
  text('Color',310,240)
  pop();
  

}