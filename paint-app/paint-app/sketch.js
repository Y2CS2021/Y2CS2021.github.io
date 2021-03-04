var start;
var end;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(255);
  noStroke();
  
}

function mouseDragged() {
  var strokeColour = color(lineColour);
  stroke(red(strokeColour), green(strokeColour), blue(strokeColour), colourAlpha);
  strokeWeight(thickness);
  
  console.log(thickness);
  console.log(colourAlpha);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

function mousePressed() {
	if (tool == "line") {
    start = createVector(mouseX, mouseY);
  }
}
function mouseReleased() {
	if (tool == "line") {
    end = createVector(mouseX, mouseY);
    line(start.x, start.y, end.x, end.y);

  }

}