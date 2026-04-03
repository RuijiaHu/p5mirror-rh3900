let angle = 0;
let particles = []; // empty array

function setup() {
  createCanvas(600, 500);
  background(100);
}

function draw() {
  background(100);
  
  
  

  // generate
  particles.push(new Particle(width/2, height/2, 1));


  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i]; // access each item!
    p.move();
    p.checkEdges();
    p.display();
  }
  
  // remove the particles that are done!
  // FLIP THE FOR LOOP!
  for (let i = particles.length-1; i >= 0; i--) {
    let p = particles[i];
    if (p.isDone == true) {
      particles.splice(i, 1); // (index, oneItem)
    }
  }
  
  // limit the number of the particles!
  while (particles.length > 1000) {
    particles.splice(0, 1); // (firstIndex, oneItem);
  }

  noStroke();
  fill(0, 255, 0);
  text(particles.length, 10, 20);
}

class Particle {
  // very special constructor function!
  constructor(startX, startY, startDia) {
    // properties (variables)
    this.x = startX;
    this.y = startY;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
    this.dia = startDia;
    this.isDone = false;
  }
  // methods (functions)
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  checkEdges() {
    if (this.x < 0 || this.x > width) {
      this.isDone = true;
    }
    if (this.y < 0 || this.y > height) {
      this.isDone = true;
    }
  }
  display() {
    push();
    noStroke();
    fill(255);
    if (this.isDone) {
      fill(255, 0, 0); // red
    }
    circle(this.x, this.y, this.dia);
    pop();
  }
}
