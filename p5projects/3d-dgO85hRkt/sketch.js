let bg_color;
let elli_color;

function setup() {
  createCanvas(800, 800, WEBGL);
  // bg_color = color(random(255), random(255), random(255));
  elli_color = 0;
  angleMode(DEGREES);
  // normalMaterial();
}

function draw() {
  bg_color = color(random(255), random(255), random(255));
  background(bg_color);
  
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;


  if (mouseY > 400) {
    background(0);
    
    elli_color = color(random(255), random(255), random(255));
   
    translate(mx, my);

    // beginShape();
    strokeWeight(10);
    stroke(random(255));
    fill(elli_color);
    ellipse(0, 0, random(10, 150));
    
    textAlign(CENTER, CENTER);
    textSize(random(20, 80));
    // fill(elli_color);
    text("hello world", 0, 0);
    // endShape();
    
  } 
  
  else {
    background(bg_color);
    
    // Sphere
    push();
    translate(mx, my);
    rotateWithFrameCount();
    stroke(0);
    strokeWeight(2);
    sphere(random(30, 100));
    pop();
    
  }
}

function rotateWithFrameCount() {
  rotateZ(frameCount);
  rotateX(frameCount);
  rotateY(frameCount);
}
