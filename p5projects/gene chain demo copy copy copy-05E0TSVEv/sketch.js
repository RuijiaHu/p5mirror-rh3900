let numOfCircles = 16;
let circleX = [];

function setup() {
  createCanvas(400, 400);
  background(100);

  for (let i = 0; i < numOfCircles; i++) {
    circleX[i] = 0 - i * 25;
  }
}

function draw() {
  background(100);

  for (let x = 0; x < width; x++) {
    // sinWave(x)
    let freq = x * 0.01 + frameCount ; //
    let amp = 80;
    let sinValue = sin(freq) * amp;

    let y1 = height / 2 + sinValue;
    let y2 = height / 2 - sinValue;

    noStroke();
    circle(x, y1, 3);
    // circle(x, y2, 3);
  }
  
//   for (let i = 0; i < circleX.length; i++) {
    
    
//     // move
//     circleX[i] += 1;
    
//     // sinWave(circleX[i])
    
//     // get the sine value
//     let freq = circleX[i] * 0.01 + frameCount * 0.05; //
//     let amp = 60;
//     let sinValue = sin(freq) * amp;
    
//     let y1 = height / 2 + sinValue;
//     let y2 = height / 2 - sinValue;
    
//     // display
//     noStroke();
//     circle(circleX[i], y1, 15);
//     circle(circleX[i], y2, 15);
//     stroke(255);
//     line(circleX[i], y1, circleX[i], y2);
    
    
//     // reappear
//     if (circleX[i] > width) {
//       circleX[i] = 0;
//     }
//   }
}

function sinWave(t){
  let freq = t * 0.01 + frameCount * 0.05; //
    let amp = 60;
    let sinValue = sin(freq) * amp;

    let y1 = height / 2 + sinValue;
    let y2 = height / 2 - sinValue;
  
}
