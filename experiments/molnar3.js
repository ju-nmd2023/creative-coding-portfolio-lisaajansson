const size = 30;
const gap = 20;
const amount = 10;
const linesPerSquare = 15;


function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0, 0,0);
  noFill();
  stroke(255, 255, 255);
  strokeWeight(1);
  frameRate(10); 
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0);
  let y = (height - size * amount - gap * (amount - 1)) / 2;
  for (let i = 0; i < amount; i++) {
    let x = (width - size * amount - gap * (amount - 1)) / 2;
    for (let z = 0; z < amount; z++) { // grid pattern with help from garrits example
      stroke(random(360), random(30, 40), random(90, 100));
      for (let j = 0; j < linesPerSquare; j++) {
        let x1 = x + random(size);
        let y1 = y + random(size);
        let x2 = x + random(size);
        let y2 = y + random(size);
        line(x1, y1, x2, y2);
      }
      x += size + gap;
    }
    y += size + gap;
  }
}

