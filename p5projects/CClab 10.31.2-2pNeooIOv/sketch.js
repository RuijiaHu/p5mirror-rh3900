let particles = []

function setup() {
  createCanvas(400, 400);
  for(let i=0;i<30;i++){
    let x = random(width)
    let y = random(height)
    let dia = random(5, 15)
    particles[i]=new Particle(x,y,dia)
  }
  
}

function draw() {
  background(220);
  for(let i=0;i<particles.length;i++){

    let p=particles[i]
    p.display()
  }
}

//singular form
class Particle {
  constructor(tempX, tempY, tempDia) {
    this.x = tempX;
    this.y = tempY;
    this.dia = tempDia;
  }
  display() {
    push();
    circle(this.x, this.y, this.dia);
    pop();
  }
}
