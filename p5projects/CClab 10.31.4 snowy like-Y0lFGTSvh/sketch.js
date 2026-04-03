let particles = []

function setup() {
  createCanvas(400, 400);
  // background(220)
  for(let i=0;i<1300;i++){
    let x = width/2
    let y = height/2
    let dia = 0.54
    particles[i]=new Particle(x,y,dia)
  }
  
}

function draw() {
  background(0);
  for(let i=0;i<particles.length;i++){

    let p=particles[i]
    p.move() 
    // p.reappear()
    p.bounce()
    p.display()
   
  }
  
}

//singular form
class Particle {
  constructor(tempX, tempY, tempDia) {
    this.x = tempX;
    this.y = tempY;
    this.dia = tempDia;
    this.xSpd = 0
    this.ySpd = random(0.5,1)
    //color
    this.r=255
    this.g=255
    this.b=255
  }
  move(){
    this.x += random(-1,1)
    this.y += this.ySpd
  }
  reappear(){
    if(this.y > height){
      this.y = 0
    }
  }
  bounce(){
    if (this.x > width || this.x <0){
      this.xSpd = -this.xSpd
    }
    if (this.y > height||this.y <0){
      this.ySpd = -this.ySpd
    }
  }
  display() {
    push();
    fill(this.r,this.g,this.b)
    stroke(this.r,this.g,this.b)
    circle(this.x, this.y, this.dia);
    pop();
  }
}
