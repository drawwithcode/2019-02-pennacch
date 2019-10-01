function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('black');
  frameRate(12);

}
var iterator = 0;
checkvar = 0;
checkvar2 = 0;
function draw() {
  if (mouseY > height/2){checkvar = 0} else {checkvar = 1};
  if (mouseX > width/2){checkvar2 = 0} else {checkvar2 = 1};
  background('black');

if (checkvar== 0){
  for (var x = 0; x < windowWidth; x += 25) {
    var d = noise(iterator) * 50;
    iterator++;
    strokeWeight(random([0], [3]));
    for (var y = 0; y < windowHeight; y += 25) {
      stroke(255);
      if (checkvar2 == 0){ fill('red');} else {fill('orange')};
      ellipse(x, y, d);
    }
  };}
if (checkvar== 1){
  for (var x = 0; x < windowWidth; x += 25) {

    for (var y = 0; y < windowHeight; y += 25) {
      var d = noise(iterator) * 50;
      iterator++;
      strokeWeight(random([0], [3]));
      stroke(255);
      if (checkvar2 == 0){ fill('red');} else {fill('orange')};
      ellipse(x, y, d);
    }
  }
}
}
