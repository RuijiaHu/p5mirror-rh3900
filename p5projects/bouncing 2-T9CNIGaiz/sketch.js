let m = [];
let n = [];
let mSpd = [];
let nSpd = [];
let diam = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 300; i++) {
    m[i] = width / 2;
    n[i] = height / 2;
    mSpd[i] = random(-2, 2);
    nSpd[i] = random(-2, 2);
    diam[i] = random(5, 40);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < 300; i++) {
    
    m[i] += mSpd[i];    
    n[i] += nSpd[i];   
    fill(random(255),random(255),random(255))
    circle(m[i], n[i], diam[i]); 
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