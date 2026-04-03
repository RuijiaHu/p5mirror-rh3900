function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(111,205,200);
  stroke(0,0,0);
  strokeWeight(2);
  fill(100,100,150);
  
  beginShape();
  arc(245,245,200,200,PI,PI*1.5)
  endShape(CLOSE);
  
  beginShape();
  arc(255,255,200,200,0,PI*0.5)
  endShape(CLOSE);
  
  beginShape();
  arc(255,245,200,200,PI*1.5,PI*2)
  endShape(CLOSE);
  
  beginShape();
  arc(245,255,200,200,PI*0.5,PI)
  endShape(CLOSE); //split  face
  
  
  stroke(206, 241, 255);
  strokeWeight(10);
  noFill();
  arc(250,250,250,250,PI,PI*2)
  arc(250,250,280,280,PI,PI*2)
  arc(250,250,310,310,PI,PI*2)
  line(125,250,125,450)
  line(110,250,110,450)
  line(95,250,95,450)
  line(375,250,375,450)
  line(390,250,390,450)
  line(405,250,405,450) //hair
  
  
  strokeWeight(15)
  stroke(255,255,255)
  line(205,200,205,220)
  line(295,200,295,220) //eye
  
  
  strokeWeight(5)
  triangle(250,245,245,255,255,255) //nose
  
  
  stroke(0,0,0)
  strokeWeight(10)
  point(205,210)
  point(295,210)
  strokeWeight(1.3)
  ellipse(205,210,50,30)
  ellipse(295,210,50,30) 
  line(230,210,270,210) //glasses
  
  
  strokeWeight(5)
  arc(240,240,100,100,0.25*PI,PI) //mouth
  
  
  strokeWeight(5)
  arc(295,205,50,40,PI*1.2,PI*1.8)
  arc(205,205,50,40,PI*1.2,PI*1.8)
  stroke(240,119,113)
  strokeWeight(10)
  arc(250,250,375,375,PI,PI*2)
  fill(240,119,113)
  strokeWeight(0)
  ellipse(65,230,60,90)
  ellipse(435,230,60,90) //earphone
  
  
  //console.log(mouseX,mouseY)
  stroke(240,119,113)
  strokeWeight(3)
  bezier(193,262,207,276,179,277,189,285) //tongue
  
  
  fill(251, 185, 95)
  triangle(0,500,250,500,0,400)
  triangle(500,500,250,500,500,400) //clothes
  
  
  stroke(255,255,255)
  circle(455,80,22)
  line(466,80,466,40)
  circle(405,60,22)
  line(416,60,416,20)
  circle(50,80,22)
  circle(100,60,22)
  line(39,80,39,40)
  line(89,60,89,20)
  line(39,40,89,20)
  line(39,48,89,28)
  noFill()
  arc(476,40,20,20,PI,PI*2) 
  arc(426,20,20,20,PI,PI*2) //the note
  
  
  noLoop()
}