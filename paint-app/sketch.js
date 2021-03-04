var start;
var end;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(255);
  noStroke();
  
}

function mouseDragged() {
	if (tool == "pen") {
	  var strokeColour = color(lineColour);
	  stroke(red(strokeColour), green(strokeColour), blue(strokeColour), colourAlpha);
	  strokeWeight(thickness);
	  
	  line(pmouseX, pmouseY, mouseX, mouseY);
	}
}

function mousePressed() {
	if (tool == "line") {
    	start = createVector(mouseX, mouseY);
		print('started');
	}
	else {
		
	}
}
function mouseReleased() {
	if (tool == "line") {
    end = createVector(mouseX, mouseY);
		alert('hello');

    line(start.x, start.y, end.x, end.y);


  }

}