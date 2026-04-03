let angle = 0;
let particles = [];
let raD = 150;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  let x, y;
  x = width / 2;
  y = height / 2;

  angle += 0.05;
  //angle = radians(90);
  let radDist = 75; // radial distance
  let sinValue1 = sin(angle) * radDist;
  let cosValue1 = cos(angle) * radDist;
  let sinValue2 = sin(angle + 3) * radDist;
  let cosValue2 = cos(angle + 3) * radDist;

  noStroke();
  fill(255);
  circle(x + cosValue1, y + sinValue1, 150);
  fill(0);
  circle(x + cosValue1, y + sinValue1, 30);
  fill(0);
  circle(x + cosValue2, y + sinValue2, 150);
  fill(255);
  circle(x + cosValue2, y + sinValue2, 30);

}

// class Particle {
//   // constructor function
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.raD = 150;
//     this.angle = 0;
//   }

//   update() {
//     this.angle += 0.05;

//     if (this.x) this.x += random(-10, 10);
//     this.y += random(-10, 10);
//   }
//   display() {
//     push();
//     noStroke();
//     fill(255);
//     circle(this.x, this.y, 0.6);
//     pop();
//   }
// }
