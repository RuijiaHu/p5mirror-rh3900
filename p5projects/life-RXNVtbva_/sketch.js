// drawmotion1
let dia = 0;
let r, g, b;
let x, y
let xSpeed, ySpeed
let growthRate = 1
//ChatGPT
let circleVisible = true

let mode  
    
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

  // drawmotion2
  angleMode(DEGREES);
  
  //explosion
  for (let i = 0; i < 300; i++) {
    m[i] = width / 2;
    n[i] = height / 2;
    mSpd[i] = random(-2, 2);
    nSpd[i] = random(-2, 2);
    diam[i] = random(5, 40);
  }
}

function draw() {
  
  if (keyIsPressed){
    if (key=="1"){
      mode = 1
    }
    else if (key=="2"){
      mode=2
    }
    else if (key=="3"){
      mode=3
    }
  }
  
  
  if (mode==1){
    drawmotion1()
  }
  else if (mode==2){
    drawmotion2()
  }
  else if(mode==3){
    drawmotion3()
  }
}




// the big bang  
function drawmotion1(){ 
  background(0, 10);
  
  //random red, blue, yellow circles
  Fill(255, 0, 0)
  Fill(255, 255, 0)
  Fill(0, 255, 255)

  

  if (circleVisible) {
    //big bang
    g += 0.9;
    b += 0.8;

    fill(r, g, b);
    dia += growthRate ;
    circle(width / 2, height / 2, dia);
    } 
  
  if (dia > 220){
    circleVisible = false
    drawmotion()
  }


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

 

function Fill(r,g,b){
  x = random(width);
  y = random(height);

  strokeWeight(2);
  fill(r, g, b);
  circle(x, y, 5);
}
}  


// the cell
function drawmotion2(){
  background(0);
  cell(50, 100, 110, width/2, height/2, 2)
  cell(20, 30, 50, 100, 100, 5)
  cell(10, 60, 80, 350, 350, 7)
  cell(30, 10, 30, 350, 60, 10)
  cell(5, 20, 25, 50, 290, 20)

  
  if (frameCount <= 200){b=1}
  else if (frameCount <= 400){b=2}    
  else if (frameCount <= 600){b=5}
  else if (frameCount <= 800){b=8}    
  else if (frameCount <= 100){b=12}    
  else if (frameCount <= 1200){b=17} 
  else if (frameCount <= 1400){b=23}
  else if (frameCount <= 1600){b=25}
  else if (frameCount <= 1800){b=27}
    
 
function cell(a, c, d, e, f, g){
  let amp = a
  let freq = frameCount ;
  let sinValue = sin(freq) * amp;
  
  stroke(255)
  
  push();
  translate(e, f);
  rotate(frameCount*0.1);
    for (let angle = 0; angle < 360; angle += g) {
    let radDist = map(sin(angle*b), -1, 1, c, d); // radial distance
    let x = cos(angle) * radDist + sinValue;
    let y = sin(angle) * radDist +sinValue;
    line(0, sinValue, x, y);
  }
  pop();
}
}

// the DNA
function drawmotion3(){  
  background(25, 48, 80, 10);

  genepair(100, 6)
  genepair(300, 6)
  genepair(width/6, 40)
  genepair(200-width/6, 40)
  genepair(200+width/6, 40)
  genepair(400-width/6, 40)  
  genepair(100-width/6, 57)
  genepair(width/6+100, 57)  
  genepair(300-width/6, 57)
  genepair(300+width/6, 57)
  genepair(width, 65)
  genepair(0,65)
  genepair(200, 65)

  fill(255, 150)
  //from ChatGPT
  let centerX = random(width);
  let centerY = random(height);
  let radius = random(10,50) 
  let vertices = [];
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;
    vertices.push(createVector(x, y));
  }
  
  beginShape();
  for (let i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape()


  
function genepair(x, amp){
  let freq = frameCount * 0.03;
  let sinValue = sin(freq) * amp;

  let y = height/2 + sinValue;
  let dia = 10;
  
  stroke(10)
  line(x,height/2,x,y)
  line(x, height/2, x, 400-y)
  
  noStroke()
  fill(255)
  circle(x, y, dia);
  circle(x, 400-y, dia)
}
}