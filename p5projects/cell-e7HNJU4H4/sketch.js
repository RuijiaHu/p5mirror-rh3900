let b

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  

  
}

function draw() {
  background(0);
  cell(50, 100, 110, width/2, height/2, 2)
  // cell(20, 30, 50, 100, 100, 5)
  // cell(10, 60, 80, 350, 350, 7)
  // cell(30, 10, 30, 350, 60, 10)
  // cell(5, 20, 25, 50, 290, 20)

  
  if (frameCount <= 200){b=1}
  else if (frameCount <= 400){b=2}    
  else if (frameCount <= 600){b=5}
  else if (frameCount <= 800){b=8}    
  else if (frameCount <= 100){b=12}    
  else if (frameCount <= 1200){b=17} 
  else if (frameCount <= 1400){b=23}
  else if (frameCount <= 1600){b=25}
  else if (frameCount <= 1800){b=27}
    
 
}




function cell(a, c, d, e, f, g){
  let amp = a
  let freq = frameCount ;
  let sinValue = sin(freq) * amp;
  
  stroke(255)
  
  push();
  translate(e, f);
  rotate(frameCount*0.1);
    for (let angle = 0; angle < 360; angle += g) {
    let radDist = map(sin(angle*b), -1, 1, c, d); // radial distance
    let x = cos(angle) * radDist + sinValue;
    let y = sin(angle) * radDist +sinValue;
    stroke(random(255),random(255),random(255))
    // fill(random(255),random(255),random(255))
    line(0, 0, x, y);
  }
  pop();
  
  push()
  
  
  
  
  
  
  pop()
}