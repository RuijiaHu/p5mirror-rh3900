let dia = 0;
let r, g, b;
let x, y
let xSpeed, ySpeed
let growthRate = 1
//ChatGPT
let circleVisible = true


//explosion
let m = [];
let n = [];
let mSpd = [];
let nSpd = [];
let diam = [];

function setup() {
  createCanvas(400, 400);
  //drawmotion1
  r = 255;
  g = 0;
  b = 0;
  growthRate *= 0.7 
  // x = floor(random(125,275))
  // y = floor(random(125,275))
  // xSpeed = random(-3,3)
  // ySpeed = random(-3,3)
  
  //explosion
  for (let i = 0; i < 300; i++) {
    // assign their initial positions
    m[i] = width / 2;
    n[i] = height / 2;
    // generate random speeds and diameters.
    mSpd[i] = random(-2, 2);
    nSpd[i] = random(-2, 2);
    diam[i] = random(5, 40);
  }

}

function draw() {

  background(0, 10);
  
  //random red, blue, yellow circles
  Fill(255, 0, 0)
  Fill(255, 255, 0)
  Fill(0, 255, 255)

  

//   if (circleVisible) {
//     //big bang
//     g += 0.9;
//     b += 0.8;

//     fill(r, g, b);
//     dia += growthRate ;
//     circle(width / 2, height / 2, dia);
//     } 
  
//   if (dia > 220){
//     circleVisible = false
//     drawmotion()
//   }


function drawmotion(){
      // background(0)
if (keyIsPressed){
  fill(random(255),random(255),random(255))
      beginShape();
      let radius = random(10,50)
      for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i 
      let sx = random(width) + cos(angle) * radius;
      let sy = random(height) + sin(angle) * radius;
      vertex(sx, sy);
      }
      endShape(CLOSE);
}
      
 
if (mouseIsPressed){  
    for (let i = 0; i < 300; i++) {
    
    m[i] += mSpd[i];    
    n[i] += nSpd[i];   
    fill(random(255),random(255),random(255))
    circle(m[i], n[i], diam[i]);
  }
}  
  
}
}

function Fill(r,g,b){
  x = random(width);
  y = random(height);

  strokeWeight(2);
  fill(r, g, b);
  circle(x, y, 5);
}