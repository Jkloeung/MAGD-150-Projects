//This creates the flowers variable and also makes it an array.
let flowers = [];

//These are variables for other things in the sketch. It covers the sun location, cloud speed and cloud position.
var x, cloudx, cloudspeed;

function setup() {
  createCanvas(400, 400);
  x = random(0,width);
  cloudspeed = 1;
  cloudx = 0;
  
  //This expression creates the number of flowers in the code. It will create flowers until i equals the number it is less than. 
  for (let i = 0; i < 20 ; i++){
    flowers.push(new Flower());
  }
}

function draw() {
  background(163, 241, 255);
  land();
  sun();
  clouds();
  
  //This expression draws the amount of flowers in the setup.  
  for (let i = 0; i < flowers.length; i++){
  flowers[i].draw();
  }
}

//This function creates the green hills.
function land(){
  noStroke();
  angleMode(DEGREES);
  fill(27, 145, 25);
  arc(200,400,600,300,180,0);
  fill(34, 209, 31);
  arc(0,430,400,200, 270, 0);
  fill(92, 247, 89);
  arc(370,440,400,200, 180,0);
}

//This function creates the sun and draws it on the random point from the setup.
function sun(){
  fill(255, 251, 31);
  ellipse(x, 50, 50, 50);
}

//This function creates the ellipses that make up the clouds.
function clouds(){
  fill(255);
  ellipse(cloudx, 100,60,60);
  ellipse(cloudx +30, 90, 50, 50);
  ellipse(cloudx -30, 90, 40,40);
  ellipse(cloudx -10, 110, 50,50);
  ellipse(cloudx +20, 120, 40,40);
  ellipse(cloudx +40, 120, 50,50);
  
  //Expression that makes the clouds move
  if(cloudx > width +100){cloudx = -100}
  cloudx += cloudspeed
}

//This is the Flower class.
class Flower{
  constructor(){
    //This creates the random variables for the Flower class. 
    var randomx, randomy, randomr;
    this.randomx = random(0, width);
    this.randomy = random(200,320);
    this.randomr = random(10,100);
  }
 
  //This is the draw function that draws the flower for the Flower class.
  draw() {
    stroke(0, 184, 37);
    strokeWeight(5);
    line(this.randomx, this.randomy, this.randomx, 350);
    noStroke();
    fill(255, 252, 71);
    ellipse(this.randomx, this.randomy, this.randomr, this.randomr);
    fill(255, 135, 94);
    ellipse(this.randomx, this.randomy, this.randomr / 2, this.randomr / 2);  
  }
}