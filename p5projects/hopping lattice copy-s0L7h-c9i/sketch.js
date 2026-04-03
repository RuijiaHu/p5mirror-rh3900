let a = 25;
let colorRedPink = "#DB3065";
let colorGreen = "#4ADC4E";
let colorBlue = "#3A3AF0";
let colorRed = "#FA1713";
let m, n;
let s, t;
let mSpeed, nSpeed;
let sSpeed, tSpeed;
let xState = false;
let zState = false;
let aState = false;
let mode = 2;

function setup() {
  createCanvas(500, 700);
  background(0);
  m = 0;
  n = 0;
  s = width;
  t = height;
  mSpeed = 8;
  nSpeed = 6;
  tSpeed = 8;
  sSpeed = 10;
}

function draw() {
  if (mode == 1) {
    drawMotion1();
  } 
  else if (mode == 2) {
    drawMotion2(); 
    // drawMotion3();
  } 
  
//   else {
    
//   }
}



function drawMotion1() {
  //First, undouble-slash the if loop, double-slash the rest of the code
  //Draw the countdown
  stroke(colorRed);
  strokeWeight(30);
  if (keyIsPressed) {
    if (key == "p") {
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else if (key == "o") {
      background(0);
    }
  }
}

function drawMotion2() {
  //Then, double-slash the if loop above, undouble-slash the rest of the code
  //Follow the key pressing rules to make a simple Hopping Lattice

  background(0);
  fill(colorGreen);
  rect(25, 25, 25, 25);
  rect(25, 100, 25, 25);
  rect(75, 50, 25, 25);
  rect(125, 125, 25, 25);
  rect(0, 300, 25, 25);
  rect(425, 150, 25, 25);
  rect(225, 225, 25, 25);
  rect(100, 325, 25, 25);
  rect(300, 275, 25, 25);
  rect(300, 300, 25, 25);
  rect(25, 325, 25, 25);
  rect(325, 0, 25, 25);
  rect(375, 425, 25, 25);
  rect(125, 525, 25, 25);
  rect(275, 400, 25, 25);
  rect(425, 475, 25, 25);
  rect(325, 625, 25, 25);

  fill(colorBlue);
  rect(525, 25, 25, 25);
  rect(325, 125, 25, 25);
  rect(475, 300, 25, 25);
  rect(250, 350, 25, 25);
  rect(325, 450, 25, 25);
  rect(25, 625, 25, 25);
  rect(50, 425, 25, 25);
  rect(250, 375, 25, 25);
  rect(275, 500, 25, 25);
  rect(25, 675, 25, 25);
  rect(375, 350, 25, 25);
  rect(125, 75, 25, 25);
  rect(325, 550, 25, 25);
  rect(200, 650, 25, 25);
  rect(125, 350, 25, 25);
  rect(325, 450, 25, 25);
  rect(25, 625, 25, 25);

  if (mouseIsPressed) {
    fill(colorRedPink);
    m = m + mSpeed;
    rect(0, m, width, a);
    if (m > height) {
      m = -25;
    }
  }

  /////
  if (aState) {
    fill(colorRedPink);
    t = t - tSpeed;
    rect(0, t, width, a);
    if (t < 0) {
      t = 725;
    }
  }

  if (zState) {
    fill(colorRedPink);
    n = n + nSpeed;
    rect(n, 0, a, height);
    if (n > width) {
      n = -25;
    }
  }

  if (xState) {
    fill(colorRedPink);
    s = s - sSpeed;
    rect(s, 0, a, height);
    if (s < 0) {
      s = 500;
    }
  }
}



function keyPressed() {
  if (key == "a" || key == "A") {
    aState = true;
  }
  if (key == "z" || key == "Z") {
    zState = true;
  }
  if (key == "x" || key == "X") {
    xState = true;
  }
}

function keyReleased() {
  if (key == "a" || key == "A") {
    aState = false;
  }
  if (key == "z" || key == "Z") {
    zState = false;
  }
  if (key == "x" || key == "X") {
    xState = false;
  }
  
  // function drawMotion3() {
  background(0);
  for (i = 0; i < 31; i++) {
    stroke(30);
    line(0, i * a, width, i * a);
  }
  for (i = 0; i < 21; i++) {
    stroke(30);
    line(i * a, 0, i * a, height);
  }
  
  // let x = floor(random(width/a));
  // rect(x*a, 0, a, a);
// }
}
