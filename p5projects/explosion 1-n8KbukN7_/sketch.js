let m,x,s,t ;
let n,y,p,q
let mSpd = [];
let nSpd = [];
let diam;

function setup() {
  createCanvas(400, 400);
  background(0);
  // for (let i = 0; i < 300; i++) {
  //   m[i] = width / 2;
  //   n[i] = height / 2;
  //   mSpd[i] = random(-2, 2);
  //   nSpd[i] = random(-2, 2);
    m=0
    n=0
  x=width
  y=0
  s=width/2
  t=0
    p=0
  q=height/2
    // m[i]=0
    // n[i]=0
  // }
}

function draw() {
  // background(0);
  // for (let i = 0; i < 300; i++) {
    let diam = random(5, 20);

    m += 10;    
    n += 10;
    x -= 10;    
    y += 10;
      
    t += 10;
  
p += 10
  
  
    fill(random(255),random(255),random(255))
    circle(m, n, diam);
  fill(random(255),random(255),random(255))
  circle(x, y, diam);
  fill(random(255),random(255),random(255))
  circle(s, t, diam);
  fill(random(255),random(255),random(255))
  circle(p, q, diam);
  // }
}