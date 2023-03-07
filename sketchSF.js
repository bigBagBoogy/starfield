let stars = [];
let speed;
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

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.position(0, 0);
  cnv.style("z-index", "-1");

  for (let i = 0; i < 1800; i++) {
    stars[i] = new Star();
  }
  x = windowWidth / 2;
  y = windowHeight / 2;
  breed = 1;
  hoog = breed;
  snelheidX = -2;
  snelheidY = 1;
}
// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  speed = map(mouseX, 0, width, 5, 10);

  background(0);

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

  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();

    stars[i].show();
  }
}
