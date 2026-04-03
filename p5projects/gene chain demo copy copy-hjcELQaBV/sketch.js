let circleX = 0;
let circleY1 = 0;
let circleY2 = 0;
//let x

function setup() {
  createCanvas(400, 400);
  background(100);

  // for (let i = 0; i<15; i++){
  //   circleX
  // }
}

function draw() {
  background(100);

  circleX++;

  for (let x = 0; x < width; x++) {
    let freq = x * 0.01 + frameCount * 0.05;//
    let amp = 60;
    let sinValue = sin(freq) * amp;

    y1 = height / 2 + sinValue;
    y2 = height / 2 - sinValue;

    noStroke();
    circle(x, y1, 3);
    circle(x, y2, 3);
    function gene(i) {
      //circles on two sin waves
      let t;

      t = circleX + i;

      if (x == t) {
        circleY1 = y1;
        circleY2 = y2;
        circle(t, circleY1, 15);
        circle(t, circleY2, 15);
      }

      if (t > width) {
        t = 0;
      }

      //the lines taht is linking the circles
      stroke(255);
      line(t, height/2, t, circleY1);
      // line(t, height/2, t, circleY2);//
    }
    gene(0);
    gene(50);
    gene(100);
    gene(150);
    gene(200);
    gene(250);
    gene(300);
    gene(350);
    gene(400);
  }
}
