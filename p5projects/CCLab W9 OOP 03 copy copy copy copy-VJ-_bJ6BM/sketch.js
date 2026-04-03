let particles = [];

function setup() {
  createCanvas(700, 600);
  background(0);

  
}

function draw() {
  background(0);
  if (mouseIsPressed){
    
   let x = mouseX;
    let y = mouseY;
    let dia = random(15, 30);
    particles.push( new Particle(x, y, dia));
}
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]; // each object
    // update
    p.move();
    // p.fall();
    // p.slowDown();
    p.speedUp();
    
    // check and/or compare
    // p.bounce();
    //p.reappear();
    
    // display!
    p.display();
  }
}

class Particle {
  constructor(tempX, tempY, tempDia) {
    this.x = tempX;
    this.y = tempY;
    this.xSpd = random(-3, 3)*0.1;
    this.ySpd = random(-3, 3)*0.1;
    this.dia = tempDia;
    //color
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  move() {
    this.x += this.xSpd*1.1;
    this.y += this.ySpd*1.1;
  }
  fall() {
    // gravity?
    this.ySpd += 0.1; // acceleration
  }
  speedUp() {
    this.xSpd = this.xSpd * 1.02; 
    this.ySpd = this.ySpd * 1.02; // 2%
  }
  slowDown() {
    this.xSpd = this.xSpd * 0.99; 
    this.ySpd = this.ySpd * 0.99; // -1%
  }
  bounce() {
    if (this.x < 0 || this.x > width) {
      this.xSpd *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpd = this.ySpd * -1;
    }
  }
  reappear() {
    if (this.y > height) {
      this.y = 0;
    }
  }
  display() {
    push();

    noStroke();
    fill(this.r, this.g, this.b, 220);
    circle(this.x, this.y, this.dia);

    pop();
  }
}
