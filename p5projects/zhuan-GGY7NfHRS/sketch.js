
function setup() {background(0);
  createCanvas(400, 400);
  angleMode(DEGREES);
  
 let freq = frameCount ;
  let sinValue = sin(freq) ;
  
  aaa(width/2, height/2, 0, width,0, height)
  
}

function draw() {
  

  // let amp = 50
 
    // aaa(random(0,width/4),random(3*width/4), 50, 300,300,50)
    // aaa(random(3*width/4), random(0,width/4), 300,50,50,300)
    // aaa(random(0,height/4),random(3*height/4),50, 300,300,50)
    // aaa()
    // aaa()
    // aaa()
    // aaa()
  
//  
//   push();
//   translate(width/2, height/2);
//   rotate(frameCount*0.1);
//     for (let angle = 0; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let x = cos(angle) * radDist
//     let y = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0, 0, x, y);
//   }
//   pop();
  
//   push();
//   translate(width/2, height/2);
//   rotate(frameCount*0.1);
//     for (let angle = 15; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let m = cos(angle) * radDist
//     let n = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0,0,m,n)
//   }
//   pop();
//  
//   push();
//   rotate(frameCount*0.1);
//     for (let angle = 0; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let x = cos(angle) * radDist
//     let y = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0, 0, x, y);
//   }
//   pop();

//   push();
//   rotate(frameCount*0.1);
//     for (let angle = 15; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let m = map(mouseX,0, width,-cos(angle) * radDist, cos(angle) * radDist)
//     let n = map(mouseY,0, height,-sin(angle) * radDist, sin(angle) * radDist) 
//     stroke(random(255),random(255),random(255))
//     line(0,0,m,n)
//   }
//   pop();
// //  
//     push();
//    translate(0, height);
//     rotate(frameCount*0.1);
//     for (let angle = 0; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let x = cos(angle) * radDist
//     let y = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0, 0, x, y);
//   }
//   pop();

//   push();
//   translate(0, height);
//   rotate(frameCount*0.1);
//     for (let angle = 15; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let m = map(mouseX,0, width,-cos(angle) * radDist, cos(angle) * radDist)
//     let n = map(mouseY,0, height,-sin(angle) * radDist, sin(angle) * radDist) 
//     stroke(random(255),random(255),random(255))
//     line(0,0,m,n)
//   }
//   pop();
// //  
//     push();
//   translate(width, height);
//   rotate(frameCount*0.1);
//     for (let angle = 0; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let x = cos(angle) * radDist
//     let y = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0, 0, x, y);
//   }
//   pop();

//   push();
//    translate(width, height);
//   rotate(frameCount*0.1);
//     for (let angle = 15; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let m = map(mouseX,0, width,-cos(angle) * radDist, cos(angle) * radDist)
//     let n = map(mouseY,0, height,-sin(angle) * radDist, sin(angle) * radDist) 
//     stroke(random(255),random(255),random(255))
//     line(0,0,m,n)
//   }
//   pop();
// //  
//     push();
//    translate(width,0);
//   rotate(frameCount*0.1);
//     for (let angle = 0; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let x = cos(angle) * radDist
//     let y = sin(angle) * radDist
//     stroke(random(255),random(255),random(255))
//     line(0, 0, x, y);
//   }
//   pop();

//   push();
//   translate(width,0);
//   rotate(frameCount*0.1);
//     for (let angle = 15; angle < 360; angle += 30) {
//     let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
//     let m = map(mouseX,0, width,-cos(angle) * radDist, cos(angle) * radDist)
//     let n = map(mouseY,0, height,-sin(angle) * radDist, sin(angle) * radDist) 
//     stroke(random(255),random(255),random(255))
//     line(0,0,m,n)
//   }
//   pop();

}

function aaa(m,n,p,q,s,t){
  push();
  translate(m,n);
  rotate(frameCount*0.1);
    for (let angle = 0; angle < 360; angle += 30) {
    let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
    let x = cos(angle) * radDist
    let y = sin(angle) * radDist
    stroke(random(255),random(255),random(255))
    line(0, 0, x, y);
  }
  pop();

  push();
  translate(m,n);
  rotate(frameCount*0.1);
    for (let angle = 15; angle < 360; angle += 30) {
    let radDist = map(sin(angle*8), -1, 1, 100, 100); // radial distance
    let m = map(mouseX,p,q,-cos(angle) * radDist, cos(angle) * radDist)
    let n = map(mouseY,s,t,-sin(angle) * radDist, sin(angle) * radDist) 
    stroke(random(255),random(255),random(255))
    line(0,0,m,n)
  }
  pop();
}