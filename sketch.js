function setup() {
  createCanvas(600, 600);
}

function draw() {
  background('red');
  print(mouseX, mouseY);

  for (var x = 0; x <= width; x += 125) {
    for (var y = 0; y <= height; y += 140) {
      strokeWeight(5);
      fill('black');
      stroke(0, 0, 150);
      rect(x + 10, y + 5, 100, 100);
      stroke('yellow');
      strokeWeight(2);
      line(x, y + 20, width, y + 20);
      line(x, y + 85, width, y + 85);
      line(x + 20, y, x + 20, height);
      line(x + 85, y, x + 85, height);
      stroke(220);
      line(x, y + 27, width, y + 27);
      line(x, y + 92, width, y + 92);
      line(x + 27, y, x + 27, height);
      line(x + 93, y, x + 93, height);
    }
  }
}