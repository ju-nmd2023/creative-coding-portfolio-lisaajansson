function setup() {
 createCanvas(innerWidth, innerHeight);
 noStroke();
 background(255, 50, 50);
}


function draw() {
 for (let i = 0; i < width; i += 20) {
   for (let j = 0; j < height; j += 20) {
     let n = noise(i * 0.01, j * 0.01);
     fill(10, 10, 100);
     circle(i, j, n * 40);
   }
 }
}
