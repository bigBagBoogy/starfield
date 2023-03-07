let stars = [];
let speed;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  cnv.position(0, 0);
  cnv.style("z-index", "-1");

  for (let i = 0; i < 1800; i++) {
    stars[i] = new Star();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  speed = map(mouseX, 0, width, 5, 10);

  background(0);

  translate(width / 2, height / 2);

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();

    stars[i].show();
  }
}
