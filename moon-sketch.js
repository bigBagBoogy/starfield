let moonPic;
function preload() {
  moonPic = loadImage("bitcoinMoon.png");
}
// let angle = 0
let x;
let y;
let snelheidX;
let snelheidY;
let breed;
let hoog;

// function chooseRandomXDirection() {
//     // if moon gets out of screen, we reset it to the middle and this function
//     //picks a new direction
//     dx = random(0, 1)
//     if (dx > 0.5) {
//         dx = 1
//     } else {
//         dx = -1
//     }
// }

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style("z-index", "-1");
  // angleMode(DEGREES)
  x = windowWidth / 2;
  y = windowHeight / 2;
  breed = 1;
  hoog = breed;
  snelheidX = -2;
  snelheidY = 1;
}
function draw() {
  background(0);
  // translate(windowWidth/2, windowHeight/2)
  // rotate(angle)
  // image(moonPic,(breed/2)*-1,(hoog/2)*-1,breed,hoog)
  image(moonPic, x, y, breed, hoog);

  // angle = angle+0.5
  x = x + snelheidX;
  y = y + snelheidY;
  breed = breed + 0.5;
  hoog = breed;
  if (
    x >= windowWidth + 200 ||
    x <= -200 ||
    y >= windowHeight + 200 ||
    y <= -200
  ) {
    breed = 1;
    x = windowWidth / 2;
    y = windowHeight / 2;
    snelheidX = random(0, 1);
    if (snelheidX < 0.5) {
      snelheidX = -2;
    } else {
      snelheidX = 2;
    }
    snelheidY = random(0, 1);
    if (snelheidY < 0.5) {
      snelheidY = -1;
    } else {
      snelheidY = 1;
    }
  }
}

// click "go live" below in the task-bar to start up a canvas at
// http://127.0.0.1:5500/
