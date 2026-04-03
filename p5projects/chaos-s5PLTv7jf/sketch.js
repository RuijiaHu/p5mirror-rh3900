function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  beginShape();
  let radius = random(10,50)
  for (let i = 0; i < 6; i++) {
   let angle = TWO_PI / 6 * i 
   let sx = random(width) + cos(angle) * radius;
    let sy = random(height) + sin(angle) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}