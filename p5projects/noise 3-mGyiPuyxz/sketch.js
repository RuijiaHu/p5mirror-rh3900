let m = [];
let n = [];
let mSpd = [];
let nSpd = [];
let diam = [];
let x = 0

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 300; i++) {
    m[i] = width / 2;
    n[i] = height / 2;
    mSpd[i] = random(-3, 3);
    nSpd[i] = random(-3, 3);
    diam[i] = random(5, 20);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 300; i++) {
    x = x+0.1
    let noiseN = noise(x)*n[i]
    
    m[i] += mSpd[i];    
    n[i] += nSpd[i];   
    fill(random(255),random(255),random(255))
    circle(m[i], noiseN, diam[i]); 
    if (m[i]<0){
      mSpd[i] = -mSpd[i]
    }
    if(m[i]>width){
      mSpd[i] = -mSpd[i]
    }
    if (n[i]<0){
      nSpd[i]= -nSpd[i]
    }
    if(n[i]>height){
      nSpd[i]=-nSpd[i]
    }
  }
}