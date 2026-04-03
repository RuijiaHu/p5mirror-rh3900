f = 0;
draw = (_) => {
  f++ ||
    (createCanvas((W = 400), W, WEBGL), (g = createGraphics((w = 512), w)));
  translate(noise(f/7)*14, noise(f/4)*12,0)
  rotate(f/99)
  noStroke();
  orbitControl()
  background(0);
  g.background(0);
  g.stroke(W);
  for (i = 0; i < 1024; i += 10) {
    g.strokeWeight(.7)
    g.line(-w, 0, w, i - (f % 10));
    g.line(0, -w, i, w);
  }
  [2, 1, -2, -2].map((i) => spotLight(W, W, W, i * W, i * W, 0, -i, -i, 0));
  rotate(PI / 2);
  push();
  translate(400, 0, 0);
  rotateY(-1); // Tweak!
  translate(-300, 0, 0);
  for (y = -W; y <= W; y += 100) {
    push();
    translate(0, 0, y - ((f * 4) % 100));
    torus(
      abs(y - ((f * 4) % 100)) / 2 + 40,
      (W - abs(y - ((f * 4) % 100))) / 222,
      64,
      4
    );
    pop();
  }
  texture(g);
  torus(-400, -300, 64, 32); //170
  pop();
  
  for (i = 0; i < TAU; i += PI / 16) {
    n = noise(f/333) + .5
    r = 33*n
    push()
    rotateY(.1)
    rotate(PI/2)
    push();
    //noiseSeed(100)
    //n = noise(f/999)*99
    translate(sin(n+i+f/17) * (TAU - i) * r, -i * 50 + 150, cos(n+i+f/17) * (TAU - i) * r);
    scale(sin(i/2)/2)
    sphere(5);
    pop();
    push();
    rotateY(PI)
    //noiseSeed(10)
    //n = noise(f/999)*99
    translate(sin(n+i+f/17) * (TAU - i) * r, -i * 50 + 150, cos(n+i+f/17) * (TAU - i) * r);
    scale(sin(i/2)/2)
    sphere(5);
    pop();
    pop();
  }
  rotate(PI/2)
  n=noise(f/30)*30
  translate(0,200 - n*9,0)
  scale(1-n/30,n/30+.5,1-n/30)
  sphere(50)
};
