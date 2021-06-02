var start;
var end;
var strokeColour;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(255);
  noStroke();
  
}

function mouseDragged() {
	if (tool == "pen") {
	  strokeColour = color(lineColour);
	  stroke(red(strokeColour), green(strokeColour), blue(strokeColour), colourAlpha);
	  strokeWeight(thickness);
	  
	  line(pmouseX, pmouseY, mouseX, mouseY);
	}
	else if (tool == "shape") {
		vertices.push(createVector(mouseX, mouseY));
		beginShape();
		for (var i = 0; i < vertices.length; i++) {
			vertex(vertices[i].x, vertices[i].y);
		}
		endShape();
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

    line(start.x, start.y, end.x, end.y);

  }

}