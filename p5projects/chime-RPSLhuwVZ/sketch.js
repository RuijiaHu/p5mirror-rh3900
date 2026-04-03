/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new ArialDancer(width/2, height/2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only
  dancer.update();
  dancer.display(); 
  
}


// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class ArialDancer{
  constructor(startX, startY){
    this.x = startX;
    this.y = startY;
    this.angel = 0;
    this.rota = 1;
    this.eye=3
    this.blink = 0.4
    this.decoAngle = 0
    this.tag1 = 0
    
  }
  update(){
    if (this.angel >= 0 || this.angel <= -0.15) {
      this.rota *= -1;
    }
    this.angel += 0.0017 * this.rota;
    
    if (frameCount % 15 == 0 && 4>=this.tag1 >2){
      this.tag1 += sin(frameCount/200)
    }
    else{
      this.tag1 -= sin(frameCount/200)
    }
    
    this.eye -= this.blink
    if (this.eye > 8 || this.eye<2){
      this.blink = -this.blink
    }
    
    this.decoAngle += radians(1);
    
  }
  display(){
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    rotate(this.angel);
    translate(this.x, this.y);
    
    //wind chimes 1    
    textSize(100)
    text('🎐', 0,0)
    
    ////wind chimes 2
    stroke("#99cc00")
    strokeWeight(3)
    line(30,-21,30,60)
    noFill()
    circle(30, -25, 8)
    //the cloud
    noStroke()
    fill("#ccff99")
    circle(20,17,47)
    circle(28,2,36)
    circle(50,17,36)
    //decoration
    push()
    translate(30,47)
    fill("#ff3300")
    rectMode(CENTER)
    rotate(this.decoAngle)
    rect(0,0,9,9)
    pop()
    //tag
    push()
    fill(204,204,204)
    translate(30,60)
    rotate(this.tag1)
    beginShape()
    vertex(-10,-5)
    vertex(10,-5)
    vertex(20,25)
    vertex(0,25)
    endShape()
    //letters on the tag
    fill(255,0,0)
    textSize(7)
    text("❤",-1,5)
    text("❤",2,12)
    text("❤",5,20)
    pop()
    //eye
    fill(0)
    ellipse(8,15,6,this.eye)
    ellipse(20,15,6,this.eye)
    

    this.drawReferenceShapes()
   
    
    
    pop();
  }  
  drawReferenceShapes(){
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);                       
    rect(-100, -100, 200, 200);    
    fill(255);
    stroke(0);
  }
  
  
}





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/