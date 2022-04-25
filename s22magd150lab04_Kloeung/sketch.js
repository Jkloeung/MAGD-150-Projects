var x;
var y;
var r;
var toppings;
var rx1;
var rx2;
var rx3;
var rx4;
var rx5;
var ry1;
var ry2;
var ry3;
var ry4;
var ry5;
function setup() {
  createCanvas(400, 400);
  x= -200;
  y= 200;
  r= 20;
  toppings= false;
  rx1 = random(-50,50);
  rx2 = random(-50,50);
  rx3 = random(-50,50);
  rx4 = random(-50,50);
  rx5 = random(-50,50);
  ry1 = random(-50,50);
  ry2 = random(-50,50);
  ry3 = random(-50,50);
  ry4 = random(-50,50);
  ry5 = random(-50,50);
}

function draw() {
  background(251, 122, 255);

  
  //table
  rectMode(CENTER);
  strokeWeight(5);
  fill(112, 80, 49);
  rect(200,200,405,300);
  
  //pizza
  
  strokeWeight(15);
  stroke(125, 60, 0);
  fill(252, 81, 43);
  ellipse(x,200,200,200)
  noStroke();
  fill(255, 225, 115);
  ellipse(x,200,170,170);
  
  //text
  push();
  textSize(12);
  stroke(0);
  strokeWeight(2);
  fill(255);
  text('Press any key for a new pizza',120,380);
  pop();
  
  //pizza loop
  if(x==200){x=x}
  else(x=x+2)
  if(x== 600){x= -200}
  if(toppings==true){
    fill(130,20,30);
    ellipse(x,y,r,r);
    ellipse(x +40,y +20,r,r);
    ellipse(x + rx1,y + ry1,r,r);
    ellipse(x + rx2,y + ry2,r,r);
    ellipse(x + rx3,y + ry3,r,r);
    ellipse(x + rx4,y + ry4,r,r);
    ellipse(x + rx5,y + ry5,r,r);
    }
  
  
  //flames 
  for(let i=0; i<10; i=i+1){
      fill(235, 131, 52);
      noStroke();
      ellipse(390,random(50,350),20,10);
      fill(255, 212, 38);
      ellipse(390,random(50,350),20,10);
    }
  
  
  if(x== 500){toppings=false;}
  
    //oven
  push();
  rectMode(CORNER);
  fill(50);
  rect(390,50,10,300);
  pop();
  
  
    //button
  push();
  rectMode(CENTER);
  fill(75);
  rect(mouseX,mouseY,40,40);
  fill(150,20,20);
  ellipse(mouseX, mouseY,30,30);
  textSize(12);
  fill(0);
  text('Push button for pepperoinis', mouseX -60, mouseY- 30);
  pop();
}

function mousePressed() {
  toppings= true;
}

function keyPressed() {
  x=x+2
}