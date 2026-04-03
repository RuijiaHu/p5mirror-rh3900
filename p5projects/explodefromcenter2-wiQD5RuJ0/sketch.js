let particles = []; // 存储粒子的数组

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0); // 设置背景色为黑色

  // 每帧添加一些新的粒子到数组中
  if (frameCount % 5 === 0) {
    for (let i = 0; i < 360; i += 45) { // 创建8个粒子，每个粒子间隔45度
      let angle = radians(i);
      let x = width / 2;
      let y = height / 2;
      let p = new Particle(x, y, angle);
      particles.push(p);
    }
  }

  // 更新并显示所有粒子
  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.display();
    if (p.isFinished()) {
      particles.splice(i, 1); // 删除已完成的粒子
    }
  }
}

class Particle {
  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    this.velocity = p5.Vector.fromAngle(angle); // 设置速度向指定角度
    this.velocity.mult(random(2, 5)); // 随机速度
    this.gravity = 0.1;
    this.alpha = 255; // 透明度
  }

  update() {
    this.velocity.y += this.gravity; // 添加重力
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= 5; // 透明度逐渐减小
  }

  display() {
    fill(255, this.alpha);
    ellipse(this.x, this.y, 10, 10);
  }

  isFinished() {
    return this.alpha < 0; // 判断粒子是否完全透明
  }
}
