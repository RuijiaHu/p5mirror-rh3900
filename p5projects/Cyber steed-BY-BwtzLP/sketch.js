let circles = []; // 存储所有圆的位置
let numCircles = 50; // 圆的数量
let speed = 2; // 移动速度

function setup() {
  createCanvas(400, 400);
  
  // 初始化圆的位置
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    circles.push(createVector(x, y)); // 用向量来存储位置
  }
}

function draw() {
  background(255);

  let center = createVector(width / 2, height / 2); // 目标位置：画布中心

  for (let i = 0; i < circles.length; i++) {
    let circlePos = circles[i]; // 获取当前圆的位置

    // 计算从圆的位置到中心的方向
    let direction = p5.Vector.sub(center, circlePos);
    direction.setMag(speed); // 设置速度大小

    // 更新圆的位置，让它朝中心移动
    circlePos.add(direction);

    // 绘制圆
    fill(100, 150, 250, 150);
    noStroke();
    ellipse(circlePos.x, circlePos.y, 20, 20);
  }
}