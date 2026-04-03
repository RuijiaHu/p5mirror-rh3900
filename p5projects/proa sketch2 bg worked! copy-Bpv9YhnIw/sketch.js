let petalsPerLayer = 6;
let layers = [];
let maxLayers = 10;
let firstScale = 0.4;
let scaleIncrement = 0.15;
let firstLayerGrowthSpeed = 0.05;
let baseGrowthSpeed = 0.02;
let layerAddInterval = 30;

let endUpdateInner = 90;
let endUpdateExt = 90;
let n = 7;
let timer = 0;
let angle = 0;


function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  background(0);
  push();
  translate(400, 250);
  drawFlower1() 
  pop();
  //drawFlower2()
}


// function drawFlower2(){
  
//   stroke(255);
//   fill(197,0,100)
//   circle(width / 2, height / 2, 10);
//   noFill();
//   let mouseDist = dist(mouseX, mouseY, width / 2, height / 2);
//   for (let i = 0; i < n; i++) {
//     let angle = i * (360 / n);
//     if (mouseIsPressed && endUpdateInner <= 280 && mouseDist <= 50) {
//       endUpdateInner += 0.5;
//     } else {
//       timer += 1;
//     }
//     if (
//       mouseIsPressed &&
//       endUpdateInner > 280 &&
//       endUpdateExt <= 280 &&
//       timer > 800 &&
//       mouseDist <= 50
//     ) {
//       endUpdateExt += 0.5;
//     }
//     drawArc(width / 2, height / 2, 0, -100, endUpdateInner, angle);
//     drawArc(width / 2, height / 2, -70, -150, endUpdateExt, angle);
//   }
// }


// function drawArc(translateX, translateY, x, y, endPos, rotateAngle) {
//   push();
//   translate(translateX, translateY);
//   rotate(rotateAngle);
//   arc(x, y, 40, 80, 90, endPos);
//   pop();
// }


function drawFlower1() {
  if (frameCount % layerAddInterval == 0 && layers.length < maxLayers) {
    let s = firstScale + scaleIncrement * layers.length;
    //drawLayer(s);
    let newLayer = {
      s: s,
      currentScale: 0, // 从0开始生长
      petalChange: random(360 / petalsPerLayer), // 每层的随机偏移
    };

    layers.push(newLayer);
  }
  for (let i = layers.length - 1; i >= 0; i -= 1) {
    let newlayer = layers[i];
    let growthSpeed;
    if (i === 0) {
      growthSpeed = firstLayerGrowthSpeed;
    } else {
      growthSpeed = baseGrowthSpeed;
    }

    if (newlayer.currentScale < newlayer.s) {
      newlayer.currentScale +=
        (newlayer.s - newlayer.currentScale) * growthSpeed;
    }


    drawLayer(newlayer.currentScale, newlayer.petalChange);
  }
}

function drawLayer(s, layerpetalChange) {
  // s = 0.5
  for (let n = 0; n < 360; n += 360 / 6) {
    push();
    //rotate(i);
    rotate(n + layerpetalChange);
    drawPetal(s);
    pop();
  }
  // for (let j = 0; j < 6; j += 1){
  //   s += 0.5
  // }
}

function drawPetal(s) {
  push();
  scale(s);
  noStroke();
  fill(197, 0, 50, 0.15);
  beginShape();
  vertex(0, 0);
  vertex(-40, -50);
  vertex(-55, -100);
  vertex(-40, -125);
  vertex(-10, -140);
  vertex(0, -130);
  vertex(10, -140);
  vertex(40, -125);
  vertex(55, -100);
  vertex(40, -50);
  vertex(0, 0);
  endShape();
  pop();
}
