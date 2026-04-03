let showCircle = false;  // 圆的显示状态
let startTime = 0;       // 记录圆开始显示的时间
let displayDuration = 2000;  // 显示圆的时间（以毫秒为单位）

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);

  // 在特定的frameCount时，触发圆的显示
  if (frameCount === 100) {
    showCircle = true;  // 开始显示圆
    startTime = millis();  // 记录当前时间
  }

  // 检查当前时间是否超过了显示时间
  if (showCircle) {
    let currentTime = millis();
    if (currentTime - startTime < displayDuration) {
      // 如果时间还没到，继续显示圆
      fill(150, 0, 255);
      ellipse(width / 2, height / 2, 100, 100);
    } else {
      // 时间到了，停止显示
      showCircle = false;
    }
  }
}