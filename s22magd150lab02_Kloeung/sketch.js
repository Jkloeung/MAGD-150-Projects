function setup() {
  createCanvas(500, 500);
}

function draw() {
  push();
  colorMode(HSB);
  background(288,94,30);
  pop();
  
  //moon
  push();
  colorMode(HSB);
  stroke(296,74,100);
  fill(296,74,70);
  ellipse(100,140,20,20);
  pop();
  
  //stars
  push();
  colorMode(RGB);
  stroke('#fff82e');
  strokeWeight(5);
  point(50,100);
  point(450,100);
  point(100,360);
  point(490,300);
  stroke('#dd5ffa');
  point(160,75);
  point(340,75);
  point(150,400);
  point(350,400);
  stroke('#70dbff');
  point(250,420);
  point(20,477);
  point(480,477);
  point(250,60);
  stroke('#fff82e');
  point(80,200);
  point(420,200);
  point(60,410);
  point(440,410);
  pop();
  
  
  //backrings
  push();
  stroke(200,200,0);
  strokeWeight(5);
  fill(200,200,0,50)
  arc(250,250,400,100,radians(180),radians(0));
  stroke(235,119,52);
  noFill();
  arc(250,250,250,60,radians(180),radians(0));
  pop();
  
  // planet
  push();
  fill(205, 25, 255);
  strokeWeight(5);
  stroke(120,10,140);
  ellipse(250,250,200,200);
  pop();
  
  //frontrings
  push();
  fill(200,200,0,50)
  stroke(200,200,0)
  strokeWeight(5)
  arc(250,250,400,100,radians(0),radians(180));
  fill(205, 25, 255);
  //planet overlap
  noStroke();
  arc(250,250,195,40,radians(0),radians(180));
  //orange front
  stroke(235,119,52);
  noFill();
  arc(250,250,250,60,radians(0),radians(180));
  pop();
  
  //ship
  push();
  stroke(40);
  strokeWeight(4);
  fill(89, 100, 133);
  
  push();
  strokeWeight(4);
  stroke(255, 247, 23);
  fill(255, 108, 23);
  triangle(320,430,350,460,310,466);
  pop();
  
  quad(370,370,425,420,440,460,330,360);
  quad(330,420,360,450,360,470,310,420);
  fill(200);
  triangle(330,420,440,360,360,450);
  noStroke();
  
  fill(50);
  triangle(430,368,400,400,390,391);
  pop();
  
  
  
}