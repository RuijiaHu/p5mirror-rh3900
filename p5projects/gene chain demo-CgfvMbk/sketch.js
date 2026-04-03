let circleX, circleY;

function setup() {
  createCanvas(400, 400);
  background(100);

  circleX = 0;
  circleY = 0;
}

function draw() {
  background(100);

  circleX++;

  for (let x = 0; x < width; x++) {
    let freq = x * 0.01 + frameCount * 0.05;
    let amp = 60;
    let sinValue = sin(freq) * amp;

    y = height / 2 + sinValue;

    noStroke();
    circle(x, y, 3);

    if (x == circleX) {
      circleY = y;
      circle(circleX, circleY, 15);
    }

    if (circleX > width) {
      circleX = 0;
    }
    
    stroke(10)
    line(circleX, height/2, circleX, circleY)
  }
}
