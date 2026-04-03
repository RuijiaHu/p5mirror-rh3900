function setup() {
  createCanvas(600, 500);
  background(255);
}

function draw() {
  noStroke()
  fill(255,153,0)
  rect(0,0,600,100)
  fill(255,204,0)
  rect(0,100,600,100)
  fill(255,255,0)
  rect(0,200,600,100)
  fill(255,230,204)
  rect(0,300,600,100)
  
 
  fill(204,85,0)
  stroke(2)
  circle(0,0,300)
  fill(200,110,0)
  circle(400, 12.5, 10);
  circle(400, 23.5, 15);
  
  for (let i=0;i<12;i++){
  fill(0,255-i*15,0)
  noStroke()
  circle(570,300,200-i*17)
 }  
  
  for (let i = 0; i < 5; i++) {
    fill(200 - i*20, 90, 0);
    stroke(5);
    strokeWeight(2);
    
    beginShape();
    vertex(400, 25 + 50 * i);
    vertex(270, 45 + 50 * i);
    vertex(530, 45 + 50 * i);
    endShape(CLOSE);
   
    rect(300, 45 + 50 * i, 200, 50);
    
  }    
  rect(360, 270, 80, 35);
  
  for (let i=0;i<9;i++){
  fill(0,255-i*20,0)
    noStroke()
  circle(300,350,200-i*20)
 }  
   
  
  for (let i=0;i<12;i++){
  fill(0,255-i*15,0)
    noStroke()
  circle(510,465,400-i*25)
 }  
  
  
  
  stroke(5) 
  fill(120,90,0)
  rect(120,270,90,20)
  
  beginShape();
  vertex(120, 270);
  vertex(120, 290);
  vertex(100, 290);
  endShape(CLOSE);
  
  beginShape();
  vertex(210, 270);
  vertex(210, 290);
  vertex(230, 290);
  endShape(CLOSE);
  
  beginShape();
  vertex(110, 290);
  vertex(220, 290);
  vertex(200, 300);
  vertex(130, 300);
  endShape(CLOSE);
  
  rect(140,300,50,40)
  

  rect(130,300,10,90)
  rect(190,300,10,90)
  
  rect(60,303,70,20)
  rect(200,303,70,20)
  
  beginShape();
  vertex(60, 303);
  vertex(60, 323);
  vertex(40, 323);
  endShape(CLOSE);
  
  beginShape();
  vertex(270, 303);
  vertex(270, 323);
  vertex(290, 323);
  endShape(CLOSE);
  
  beginShape();
  vertex(50, 323);
  vertex(130, 323);
  vertex(130, 333);
  vertex(70, 333);
  endShape(CLOSE);
  
  beginShape();
  vertex(200, 323);
  vertex(280, 323);
  vertex(260, 333);
  vertex(200, 333);
  endShape(CLOSE);
  
  rect(70,333,10,55)
  rect(250,333,10,55)
  
  fill(255)
  rect(145,310,40,15)
  
  for(let i=0;i<20;i++){
    fill(0,255-i*10,0)
    noStroke()
    circle(200,500,300-i*15)
  }
  
  for (let i=0;i<20;i++){
  fill(0,255-i*10,0)
    noStroke()
  circle(0,500,370-i*16)
 }  
  
 
  
  
  //fill(204,102,0)
  //circle(10,200,250)
  
  
  
}
