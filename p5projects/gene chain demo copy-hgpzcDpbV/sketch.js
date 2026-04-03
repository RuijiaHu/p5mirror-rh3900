let circleX = 0;
let circleY1 = 0;
let circleY2 = 0;
let x;

function setup() {
  createCanvas(400, 400);
  background(100);

  // for (let i = 0; i<15; i++){
  //   circleX
  // }
}

function draw() {
  background(100);

  // circleX++;

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


function gene(i) { 
  //two sin waves
  for (let x = 0; x < width; x++) {
    let freq = x * 0.01 + frameCount*0.1;
    let amp = 60;
    let sinValue = sin(freq) * amp;

    y1 = height / 2 + sinValue;
    y2 = height / 2 - sinValue;

    noStroke();
    circle(x, y1, 3);
    circle(x, y2, 3);
    
  //circles on two sin waves
  //I intended to make it in a function, but there is a bug, show in a different sketch
//     let t;

//     t = circleX + i;

//     if (x == t) {
//       circleY1 = y1;
//       circleY2 = y2;
//       circle(t, circleY1, 15);
//       circle(t, circleY2, 15);
//     }

//     if (t > width) {
//       t = 0;
//     }
  
//     //the lines taht is linking the circles
//     stroke(255);
//     line(t, circleY2, t, circleY1);
  }
}
