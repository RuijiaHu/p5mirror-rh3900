let p1, p2;
function setup() {
  createCanvas(400, 400);
  p1 = new Particle(100,200);
  p2 = new Particle(300, 200)
  // console.log(p)
}

function draw() {
  background(220);
  p1.display()
  p2.display()
}

//singular form
class Particle {
  constructor(tempX, tempY) {
    this.x = tempX;
    this.y = tempY;
    this.dia = 30;
  }
  display() {
    push();
    circle(this.x, this.y, this.dia);
    pop();
  }
}
