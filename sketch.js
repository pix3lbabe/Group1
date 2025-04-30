let fox;
let forestVideo;

let x = 100;
let y = 100;
let angle1 = 0.0;
let segLength = 50;

// Base scale of fox
let baseScale = 0.08; // Starting small
let startingScale = 0.08; // Store original size for reset

function preload() {
  fox = loadImage("fox2.png"); // Load your fox image
}

function setup() {
  let canvas = createCanvas(940, 660);
  canvas.parent('canvas-holder'); //  Attach canvas inside the webpage!
  
forestVideo = createVideo("https://dl.dropboxusercontent.com/s/abc123xyz456/forest.mp4");
forestVideo.hide();
forestVideo.volume(0);
forestVideo.loop();
forestVideo.play();


  imageMode(CENTER)
}

function draw() {
  background(0);
  noCursor();
  image(forestVideo, width / 2, height / 2, width, height);

  // Fox follows mouse
  let dx = mouseX - x;
  let dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  // Draw fox with rotation and scaling
  push();
  translate(x, y);
  rotate(angle1);
  scale(baseScale);
  image(fox, 0, 0);
  pop();
}

function mousePressed() {
  baseScale += 0.05; // Grow the fox when clicked
}

function keyPressed() {
  if (key === ' ') {
    baseScale = startingScale; // Reset to original size when spacebar is pressed
  }
}
