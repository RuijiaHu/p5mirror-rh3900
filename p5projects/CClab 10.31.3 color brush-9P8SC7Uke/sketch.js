let particles = []

function setup() {
  createCanvas(400, 400);
  background(220)
  for(let i=0;i<1300;i++){
    let x = random(width)
    let y = random(0,100)
    let dia = 2
    particles[i]=new Particle(x,y,dia)
  }
  
}

function draw() {
  // background(220);
  for(let i=0;i<particles.length;i++){

    let p=particles[i]
    p.move()
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
    this.r=random(255)
    this.g=random(255)
    this.b=random(255)
  }
  move(){
    this.x += this.xSpd
    this.y += this.ySpd
  }
  display() {
    push();
    fill(this.r,this.g,this.b)
    stroke(this.r,this.g,this.b)
    circle(this.x, this.y, this.dia);
    pop();
  }
}
