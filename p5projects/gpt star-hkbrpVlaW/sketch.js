
let angle = 0;
let starSize = 50;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(width / 2, height / 2); // 将原点移动到画布中心

  beginShape();
  for (let i = 0; i < 5; i++) {
    let x = cos(angle + i * 72) * starSize; // 计算顶点的 x 坐标
    let y = sin(angle + i * 72) * starSize; // 计算顶点的 y 坐标
    vertex(x, y);
    x = cos(angle + i * 72 + 36) * (starSize / 2); // 内部顶点的 x 坐标
    y = sin(angle + i * 72 + 36) * (starSize / 2); // 内部顶点的 y 坐标
    vertex(x, y);
  }
  endShape(CLOSE);

  angle += 1; // 每帧增加的角度值，控制旋转速度
}