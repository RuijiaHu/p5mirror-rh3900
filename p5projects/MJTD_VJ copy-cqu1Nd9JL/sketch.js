let particles = [];
let sparks = [];
let mode = 1;
let flashEnergy = 0;
let beat = 0;
let floorOffset = 0;
let silhouetteGlow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  noCursor();

  for (let i = 0; i < 180; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  drawBackgroundGradient();
  drawStageLights();
  drawFloor();
  drawVisualModes();

  beat += 2.5;
  floorOffset += 2;

  let targetGlow = mouseIsPressed ? 255 : 120;
  silhouetteGlow = lerp(silhouetteGlow, targetGlow, 0.08);
  flashEnergy = lerp(flashEnergy, mouseIsPressed ? 1 : 0, 0.08);

  drawPerformer(width * 0.5, height * 0.62, 1.05);
  updateParticles();
  updateSparks();
  drawHUD();
  drawCustomCursor();
}

function drawBackgroundGradient() {
  for (let y = 0; y < height; y += 2) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(
      color(8, 5, 20),
      color(0, 0, 0),
      inter
    );
    stroke(c);
    line(0, y, width, y);
  }

  noStroke();
  fill(255, 255, 255, 8 + flashEnergy * 30);
  for (let i = 0; i < 35; i++) {
    let x = noise(i * 20, frameCount * 0.005) * width;
    let y = noise(i * 50, frameCount * 0.003 + 999) * height * 0.6;
    circle(x, y, random(1, 4));
  }
}

function drawStageLights() {
  blendMode(ADD);

  let sweep1 = sin(frameCount * 1.2) * width * 0.22;
  let sweep2 = cos(frameCount * 0.9) * width * 0.18;
  let sweep3 = sin(frameCount * 1.7 + 120) * width * 0.16;

  drawSpotlight(width * 0.2 + sweep1, 0, width * 0.42, height * 0.78, color(80, 180, 255, 40));
  drawSpotlight(width * 0.5 + sweep2, 0, width * 0.52, height * 0.72, color(180, 120, 255, 35));
  drawSpotlight(width * 0.8 + sweep3, 0, width * 0.58, height * 0.75, color(255, 220, 120, 32));

  if (mouseIsPressed) {
    for (let i = 0; i < 4; i++) {
      let sx = random(width);
      drawSpotlight(sx, 0, mouseX, mouseY, color(255, 255, 255, 22));
    }
  }

  blendMode(BLEND);
}

function drawSpotlight(x1, y1, x2, y2, c) {
  noStroke();
  for (let i = 18; i > 0; i--) {
    let a = alpha(c) * (i / 18);
    fill(red(c), green(c), blue(c), a * 0.22);
    triangle(
      x1 - i * 8, y1,
      x1 + i * 8, y1,
      x2, y2
    );
  }
}

function drawFloor() {
  push();
  translate(width / 2, height * 0.8);

  let floorH = height * 0.28;
  noStroke();

  for (let j = 0; j < 10; j++) {
    let yy = map(j, 0, 9, 0, floorH);
    fill(20 + j * 4, 20 + j * 4, 30 + j * 6, 70);
    rect(0, yy, width, floorH / 8);
  }

  // glowing perspective tiles
  strokeWeight(1);
  for (let i = -12; i <= 12; i++) {
    let xTop = i * 35 + (floorOffset % 35);
    stroke(120, 180, 255, 70);
    line(xTop, 0, i * 80, floorH);
  }

  for (let z = 0; z < 12; z++) {
    let y = map(z, 0, 11, 0, floorH);
    let w = map(z, 0, 11, width * 0.16, width * 1.05);
    stroke(180, 120, 255, 50);
    line(-w / 2, y, w / 2, y);
  }

  pop();
}

function drawVisualModes() {
  if (mode === 1) {
    drawStarBursts();
  } else if (mode === 2) {
    drawBeatRings();
  } else if (mode === 3) {
    drawFlashPanels();
  } else if (mode === 4) {
    drawMoonwalkWave();
  }
}

function drawStarBursts() {
  push();
  translate(width / 2, height / 2);
  blendMode(ADD);

  for (let i = 0; i < 8; i++) {
    push();
    rotate(frameCount * 0.7 + i * 45);
    strokeWeight(2);
    stroke(255, 220, 120, 90);
    line(0, 0, 0, 180 + sin(frameCount * 2 + i * 20) * 50);
    pop();
  }

  blendMode(BLEND);
  pop();
}

function drawBeatRings() {
  push();
  translate(width / 2, height * 0.42);

  noFill();
  for (let i = 0; i < 6; i++) {
    let r = 90 + i * 45 + sin(beat + i * 25) * 18;
    strokeWeight(2 + flashEnergy * 2);
    stroke(100 + i * 20, 160, 255, 90);
    ellipse(0, 0, r * 2);
  }

  pop();
}

function drawFlashPanels() {
  let cols = 8;
  let rows = 5;
  let w = width / cols;
  let h = height / rows;

  noStroke();
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let n = noise(x * 0.4, y * 0.4, frameCount * 0.04);
      if (n > 0.48) {
        fill(
          100 + 155 * sin(frameCount + x * 20),
          100 + 155 * sin(frameCount * 1.3 + y * 30),
          180 + 75 * sin(frameCount * 1.7),
          40 + flashEnergy * 90
        );
        rect(x * w + w / 2, y * h + h / 2, w * 0.96, h * 0.96);
      }
    }
  }
}

function drawMoonwalkWave() {
  noFill();
  strokeWeight(3);

  for (let j = 0; j < 7; j++) {
    stroke(120 + j * 15, 180, 255, 70);
    beginShape();
    for (let x = 0; x <= width; x += 18) {
      let y = height * 0.35 + j * 26 + sin(x * 0.02 + frameCount * 2 + j * 20) * (20 + mouseX * 0.02);
      vertex(x, y);
    }
    endShape();
  }
}

function drawPerformer(cx, cy, s) {
  push();
  translate(cx, cy);
  scale(s);

  // shadow glow
  for (let i = 0; i < 7; i++) {
    noStroke();
    fill(80, 180, 255, 10 + i * 3 + flashEnergy * 10);
    ellipse(0, 140, 160 + i * 12, 40 + i * 4);
  }

  // aura
  blendMode(ADD);
  noStroke();
  fill(255, 255, 255, silhouetteGlow * 0.12);
  ellipse(0, -60, 180, 300);
  blendMode(BLEND);

  // body silhouette
  fill(8, 8, 12, 245);

  // hat
  rect(0, -170, 120, 10, 3);
  rect(15, -183, 70, 28, 4);

  // head
  ellipse(0, -130, 58, 66);

  // torso leaning pose
  push();
  rotate(-12);
  rect(0, -45, 48, 110, 18);
  pop();

  // hips
  ellipse(-5, 10, 48, 30);

  // left arm
  push();
  translate(-18, -90);
  rotate(-40 + sin(frameCount * 2) * 4);
  rect(0, 30, 18, 84, 8);
  translate(0, 70);
  rotate(-20);
  rect(0, 24, 15, 60, 8);
  pop();

  // right arm up
  push();
  translate(20, -95);
  rotate(55 + sin(frameCount * 3) * 3);
  rect(0, 32, 18, 86, 8);
  translate(0, 68);
  rotate(15);
  rect(0, 18, 14, 52, 8);

  // glove sparkle
  blendMode(ADD);
  fill(255, 255, 255, 210);
  circle(8, 42, 10);
  for (let i = 0; i < 4; i++) {
    stroke(255, 255, 255, 180);
    line(8, 42, 8 + cos(frameCount * 6 + i * 90) * 16, 42 + sin(frameCount * 6 + i * 90) * 16);
  }
  blendMode(BLEND);
  pop();

  // left leg
  push();
  translate(-15, 25);
  rotate(18 + sin(frameCount * 2.5) * 2);
  rect(0, 52, 20, 110, 10);
  translate(0, 95);
  rotate(10);
  rect(0, 25, 18, 55, 8);

  // shoe
  fill(245);
  rect(18, 48, 44, 10, 4);
  pop();

  // right leg
  push();
  translate(15, 25);
  rotate(-30 + sin(frameCount * 2.5 + 90) * 2);
  rect(0, 52, 20, 110, 10);
  translate(0, 95);
  rotate(-15);
  rect(0, 25, 18, 55, 8);

  // shoe
  fill(245);
  rect(24, 45, 42, 10, 4);
  pop();

  pop();
}

function updateParticles() {
  for (let p of particles) {
    p.update();
    p.display();
  }
}

function updateSparks() {
  for (let i = sparks.length - 1; i >= 0; i--) {
    sparks[i].update();
    sparks[i].display();
    if (sparks[i].life <= 0) sparks.splice(i, 1);
  }

  if (mouseIsPressed || frameCount % 3 === 0) {
    for (let i = 0; i < 3; i++) {
      sparks.push(new Spark(
        width * 0.5 + random(-70, 70),
        height * 0.33 + random(-120, 90)
      ));
    }
  }
}

function drawHUD() {
  noStroke();
  fill(255, 220);
  textAlign(LEFT, TOP);
  textSize(15);
  text("1 starburst  2 rings  3 flash panels  4 moonwalk floor", 10, 22);
}

function drawCustomCursor() {
  push();
  blendMode(ADD);
  noFill();
  stroke(255, 255, 255, 200);
  strokeWeight(1.5);
  circle(mouseX, mouseY, 18 + sin(frameCount * 6) * 3);
  circle(mouseX, mouseY, 32 + sin(frameCount * 4) * 4);
  line(mouseX - 12, mouseY, mouseX + 12, mouseY);
  line(mouseX, mouseY - 12, mouseX, mouseY + 12);
  pop();
}

function keyPressed() {
  if (key === '1') mode = 1;
  if (key === '2') mode = 2;
  if (key === '3') mode = 3;
  if (key === '4') mode = 4;
  if (key === 's' || key === 'S') saveCanvas('mj_vj', 'png');

  // extra burst
  for (let i = 0; i < 30; i++) {
    sparks.push(new Spark(mouseX, mouseY));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = random(width);
    this.y = random(height);
    this.r = random(1, 4);
    this.speed = random(0.4, 2.2);
    this.a = random(120, 255);
    this.hueType = floor(random(3));
  }

  update() {
    let dx = map(mouseX, 0, width, -1.8, 1.8);
    let dy = map(mouseY, 0, height, -1.2, 1.2);

    this.x += dx * this.speed + sin(frameCount + this.y * 0.02) * 0.4;
    this.y += dy * 0.5 + cos(frameCount + this.x * 0.01) * 0.35;

    if (mouseIsPressed) {
      let ang = atan2(this.y - mouseY, this.x - mouseX);
      this.x += cos(ang) * 2.2;
      this.y += sin(ang) * 2.2;
    }

    if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) {
      this.reset();
      this.x = random(width);
      this.y = random(height);
    }
  }

  display() {
    noStroke();

    if (this.hueType === 0) fill(255, 220, 120, this.a * 0.55);
    if (this.hueType === 1) fill(120, 180, 255, this.a * 0.45);
    if (this.hueType === 2) fill(220, 120, 255, this.a * 0.45);

    circle(this.x, this.y, this.r + flashEnergy * 2);
  }
}

class Spark {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-4, 4);
    this.vy = random(-5, 2);
    this.life = 255;
    this.size = random(2, 6);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.05;
    this.life -= 6;
  }

  display() {
    push();
    blendMode(ADD);
    noStroke();
    fill(255, 255, 255, this.life);
    circle(this.x, this.y, this.size);

    stroke(255, 220, 120, this.life * 0.8);
    line(this.x - this.size, this.y, this.x + this.size, this.y);
    line(this.x, this.y - this.size, this.x, this.y + this.size);
    pop();
  }
}