let balls = [];

function setup() {
  createCanvas(400, 400);
  background(50);
  
// for (let i=0;i<100;i++){
//   let x = random(width)
//   let y = random(height)
//   let dia = random(5,40)
//   balls.push( new Ball(x,y,dia))
// }
//   balls.push(new Ball(100, 200));
//   balls.push(new Ball(200, 200));
//   balls.push(new Ball(300, 200));
}

function draw() {
  background(50);
  
  // let x = width/2
  // let y = height/2
  // let dia = random(10,30)
  balls.push(new Ball(width/2,height/2,random(10,30)))

  for (let i = 0; i < balls.length; i++) {
    let b = balls[i];
    b.move();
    b.display();
  }
  
  if (balls.length>100){
    balls.splice(0,1)
  }
}

class Ball {
  constructor(x, y,dia) {
    this.x = x;
    this.y = y;
    this.xSped=random(-2,2)
    this.ySped=random(-2,2)
    this.dia = dia
  }
  move() {
    this.x += this.xSped;
    this.y += this.ySped
  }
  display() {
    noStroke()
    ellipse(this.x, this.y, this.dia, this.dia);
  }
}