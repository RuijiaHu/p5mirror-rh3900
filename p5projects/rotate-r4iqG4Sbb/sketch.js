function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
  let freq = frameCount ;
  let sinValue = sin(freq) ;
  
  push();
  translate(width/2, height/2);

  rotate(frameCount*0.1);
    for (let angle = 0; angle < 360; angle += 30) {
    let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
    let x = cos(angle) * radDist
    let y = sin(angle) * radDist
   
   arc(x, y, 250, 200, 2*PI-126*PI/180, 2*PI-54*PI/180)   
    // line(0, 0, x, y);
  }
  pop();

  push();
  translate(width/2, height/2);
  rotate(frameCount*0.1);
    for (let angle = 15; angle < 360; angle += 30) {
    let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
    let m =cos(angle) * radDist*1.2
    let n =sin(angle) * radDist*1.2
    stroke(random(255),random(255),random(255))
    line(0,0,m,n)
  }
  pop();

  
}




 
