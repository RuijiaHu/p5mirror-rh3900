let x = [];
let y = [];
let xSpd = [];
let ySpd = [];
let dia = [];

// total number of circles
let totalNum = 100;

function setup() {
  createCanvas(400, 500);

  for (let i = 0; i < totalNum; i++) {
    // assign their initial positions
    x[i] = width / 2;
    y[i] = height / 2;
    // generate random speeds and diameters.
    xSpd[i] = random(-2, 2);
    ySpd[i] = random(-2, 2);
    dia[i] = random(5, 40);
  }
}

function draw() {
  background(50);

  for (let i = 0; i < totalNum; i++) {
    // update the position values with the speed values
    // simply, let them move.
    x[i] += xSpd[i];    // x[i] = x[i] + xSpd[i];
    y[i] += ySpd[i];    // y[i] = y[i] + ySpd[i];
    
    // display
    circle(x[i], y[i], dia[i]);
  }
}
