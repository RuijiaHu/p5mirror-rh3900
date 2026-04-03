let r;
let g;
let b;
let gua = ["gua", "呱", "ga", "gu"];

function setup() {
  createCanvas(700, 700);
  r = 0;
  g = 50;
  b = 0;
}

function draw() {
  //background
  let r1 = map(mouseX, 0, width, 0, 255);
  let g1 = map(mouseY, 0, height, 0, 255);
  let b1 = 150;
  background(r1, g1, b1);
  
  //center
  translate(width / 2, height / 2);

  //using list
  for (let i = 0; i < gua.length; i++) {
    fill(random(255), random(255), random(255));
    textSize(random(50, 100));
    text(
      gua[i],
      random(-width / 2, width / 2),
      random(-height / 2, height / 2)
    );
  }

  //body
  fill(r, g, b);
  noStroke();
  beginShape();
  curveVertex(0, -20);
  curveVertex(-40, 10);
  curveVertex(-80, 200);
  curveVertex(0, 250);
  curveVertex(80, 200);
  curveVertex(40, 10);
  curveVertex(0, -20);
  endShape(CLOSE);

  //face
  ellipse(0, -30, 220, 170);

  //arm
  symmetrical_leg(-15, 60, -110, 85, -120, 120, -50, 100);
  symmetrical_leg(-135, 30, -95, 105, -129, 113, -145, 32);

  //leg
  symmetrical_leg(-10, 200, -180, 120, -220, 170, -10, 250);
  symmetrical_leg(-90, 265, -180, 150, -220, 170, -110, 265);

  //eyes
  symmetrical_eye(75, 105, 100);

  //eyeWhite
  eyeWhite(70, 105, 50);

  //eyeBlack
  eyeBlackFollowMouse(70, 105, 50, 27);

  //feet
  symmetrical_feet(-100, 265, 20, -120, 280, -105, 285, -90, 283, 3, 8);
  symmetrical_feet(-140, 31, 14, -155, 15, -145, 13, -135, 15, 2, 6);

  //mouth
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(0, 0, 80, 40, 0, PI);

  //tongue
  stroke(100, 0, 0);
  strokeWeight(8);
  line(0, 20, mouseX - width / 2, mouseY - height / 2);
}

function symmetrical_eye(a, b, c) {
  circle(-a, -b, c);
  circle(a, -b, c);
}

function eyeWhite(a, b, c) {
  fill(255);
  noStroke();
  circle(-a, -b, c);
  circle(a, -b, c);
}

function eyeBlackFollowMouse(a, b, whiteSize, blackSize) {
  //distance between translate and my mouse
  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;

  //the max distance the blackeye could move within the white eye
  let maxR = whiteSize / 2 - blackSize / 2 - 2;

  //position of the blackeye
  let lx = -a;
  let ly = -b;

  //the vector between my mouse and black eye
  let vectorXL = mx - lx;
  let vectorYL = my - ly;

  //move only inside the white range
  let distL =  dist(mx, my, lx, ly);
  if (distL > maxR) {
    vectorXL = (vectorXL / distL) * maxR;
    vectorYL = (vectorYL / distL) * maxR;
  }

  //right eye
  let rx = a;
  let ry = -b;
  let vectorXR = mx - rx;
  let vectorYR = my - ry;
  let distR = dist(mx, my, rx, ry);
  if (distR > maxR) {
    vectorXR = (vectorXR / distR) * maxR;
    vectorYR = (vectorYR / distR) * maxR;
  }

  //black eye
  fill(0);
  noStroke();
  circle(lx + vectorXL, ly + vectorYL, blackSize);
  circle(rx + vectorXR, ry + vectorYR, blackSize);
}

function symmetrical_leg(x1, y1, x2, y2, x3, y3, x4, y4) {
  //bottom left
  beginShape();
  curveVertex(x1, y1);
  curveVertex(x1, y1);
  curveVertex(x2, y2);
  curveVertex(x3, y3);
  curveVertex(x4, y4);
  curveVertex(x4, y4);
  endShape();

  //bottom right
  beginShape();
  curveVertex(-x1, y1);
  curveVertex(-x1, y1);
  curveVertex(-x2, y2);
  curveVertex(-x3, y3);
  curveVertex(-x4, y4);
  curveVertex(-x4, y4);
  endShape();
}

function symmetrical_feet(a1, b1, c1, a2, b2, a3, b3, a4, b4, c, w) {
  //bottom left
  fill(r, g, b);
  noStroke();
  circle(a1, b1, c1);
  strokeWeight(w);
  stroke(r, g, b);
  line(a1, b1, a2, b2);
  line(a1, b1, a3, b3);
  line(a1, b1, a4, b4);
  circle(a2, b2, c);
  circle(a3, b3, c);
  circle(a4, b4, c);

  //bottom right
  fill(r, g, b);
  noStroke();
  circle(-a1, b1, c1);
  strokeWeight(w);
  stroke(r, g, b);
  line(-a1, b1, -a2, b2);
  line(-a1, b1, -a3, b3);
  line(-a1, b1, -a4, b4);
  circle(-a2, b2, c);
  circle(-a3, b3, c);
  circle(-a4, b4, c);
}
