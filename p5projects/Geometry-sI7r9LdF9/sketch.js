function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  for (let i = 0; i < 6 ;i++){
    fill(0,130,200-i*15,50)
    drawSixConcentricCircles(420, -10 + i * 80);
    fill(0,130,190-i*15,50)
    drawSixConcentricCircles(350, 30.5 + i * 80);
    fill(0,130,180-i*15,50)
    drawSixConcentricCircles(280, -10 + i * 80);
    fill(0,130,170-i*15,50)
    drawSixConcentricCircles(210, 30.5 + i * 80);
    fill(0,130,160-i*15,50)
    drawSixConcentricCircles(140, -10 + i * 80);
    fill(0,130,150-i*15,50)
    drawSixConcentricCircles(70, 30.5 + i * 80);
    fill(0,130,140-i*15,50)
    drawSixConcentricCircles(0, -10 + i * 80);   
  }
//   for (let i = 0; i < 6 ;i++){
    
//     fill(0,130,200-i*15,50)
    
//     circle(420,-10,150-i*30)
//     circle(420,65,150-i*30)
//     circle(420,150,150-i*30)
//     circle(420,230,150-i*30)
//     circle(420,310,150-i*30)
//     circle(420,390,150-i*30)
//   }
  
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,190-i*15,50)
//     circle(350,30.5,150-i*30)
//     circle(350,105.5,150-i*30)
//     circle(350,180.5,150-i*30)
//     circle(350,255.5,150-i*30)
//     circle(350,330.5,150-i*30)
//     circle(350,405.5,150-i*30)
//   }
  
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,180-i*15,50)
//     circle(280,-10,150-i*30)
//     circle(280,65,150-i*30)
//     circle(280,150,150-i*30)
//     circle(280,230,150-i*30)
//     circle(280,310,150-i*30)
//     circle(280,390,150-i*30)
//   }
  
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,170-i*15,50)
//     circle(210,30.5,150-i*30)
//     circle(210,105.5,150-i*30)
//     circle(210,180.5,150-i*30)
//     circle(210,255.5,150-i*30)
//     circle(210,330.5,150-i*30)
//     circle(210,405.5,150-i*30)
//   }
 
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,160-i*15,50)
//     circle(140,-10,150-i*30)
//     circle(140,65,150-i*30)
//     circle(140,150,150-i*30)
//     circle(140,230,150-i*30)
//     circle(140,310,150-i*30)
//     circle(140,390,150-i*30)
//   }
  
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,150-i*15,50)
//     circle(70,30.5,150-i*30)
//     circle(70,105.5,150-i*30)
//     circle(70,180.5,150-i*30)
//     circle(70,255.5,150-i*30)
//     circle(70,330.5,150-i*30)
//     circle(70,405.5,150-i*30)
//   }
  
//   for (let i = 0; i < 6 ;i++){
//     fill(0,130,140-i*15,50)
//     circle(0,-10,150-i*30)
//     circle(0,65,150-i*30)
//     circle(0,150,150-i*30)
//     circle(0,230,150-i*30)
//     circle(0,310,150-i*30)
//     circle(0,390,150-i*30)
//   }
  

}


function drawSixConcentricCircles(x, y) {
  for (let i = 0; i < 6; i++) {
    // optional fill commands
    circle(x, y, 150 - i * 30); 
  }
}