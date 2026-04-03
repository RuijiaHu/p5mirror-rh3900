let x, y
let img1,img2,img3,img4,img5

function preload() {
  img1 = loadImage("xiaojie1.jpg");
  img2 = loadImage("xiaojie2.jpg");
  img3 = loadImage("xiaojie3.jpg");
  img4 = loadImage("xiaojie4.jpg");
  img5 = loadImage("xiaojie5.jpg");
  img6 = loadImage("gang1.jpg");
  img7 = loadImage("gang2.jpg");
  img8 = loadImage("gang3.jpg");
  img9 = loadImage("gang4.jpg");
  // img10 = loadImage();
  // img11 = loadImage();
  // img12 = loadImage();
  // img13 = loadImage();
  // img14 = loadImage();
  // img15 = loadImage();
  // img16 = loadImage();
  // img17 = loadImage();
  // img18 = loadImage();
  // img19 = loadImage();
  // img20 = loadImage();
  // img21 = loadImage();
  // img22 = loadImage();
  // img23 = loadImage();
  // img24 = loadImage();
  // img25 = loadImage();
  // img26 = loadImage();
  // img27 = loadImage();
  // img28 = loadImage();
}

function setup() {
  createCanvas(640, 425);
  imageMode(CENTER)
  
  x = new Xiaojie()
  
  y = new gang()


}

function draw() {
  background(255);
  x.update()
  x.display()
  
  y.update()
  y.display()
  

  
}

class Xiaojie{
  constructor() {
    this.a = 100;
    this.b = 100;
    this.c = 100;
    this.d = 140;
    this.e = 110;
    this.f = 150;
  }
  update(){
    img1.filter(THRESHOLD);
    img2.filter(THRESHOLD);
    img3.filter(THRESHOLD);
  }
  display() {
    if (frameCount % 150 <= 15) {
      image(img1, this.a, this.b, this.c, this.d);
    } else if (frameCount % 150 <= 80) {
      image(img2, this.a, this.b, this.c, this.d);
    } else if (frameCount % 150 <= 150) {
      image(img3, this.a, this.b, this.c, this.d);
    }

    if (50 <= mouseX && mouseX <= 150 && 30 <= mouseY && mouseY<= 170) {
      if (mouseIsPressed) {
        if (frameCount % 50 < 25) {
          image(img4, this.a, this.b, this.e, this.f);
        } 
        else {
          image(img5, this.a, this.b, this.e, this.f);
        }
      }
    }
  }
}

class gang{
  constructor() {
    this.a = 300;
    this.b = 300;
    this.c = 200;
    this.d = 120;
    this.e = 210;
    this.f = 128;
  }
  update(){
    img6.filter(THRESHOLD);
    img7.filter(THRESHOLD);
  }
  display() {
    if (frameCount % 40 <= 20) {
      image(img6, this.a, this.b, this.c, this.d);
    } 
    else {
      image(img7, this.a, this.b, this.c, this.d);
    } 

    if (200 <= mouseX <= 400 && 240 <= mouseY <= 360) {
      if (mouseIsPressed) {
        if (frameCount % 35 < 15) {
          image(img8, this.a, this.b, this.e, this.f);
        } 
        else {
          image(img9, this.a, this.b, this.e, this.f);
        }
      }
    }
  }
}
