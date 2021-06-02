var start;
var end;
var strokeColourArray;
var strokeColour;
var thickness;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(255);
  noStroke();
  strokeColour = color(document.getElementById('colour-picker').value);
  thickness = document.getElementById('thickness-slider').value;
}

function draw() {
	console.log(thickness);
}

function mouseDragged() {
	if (tool == "pen") {
	  var strokeColour = color(Number(strokeColourArray[0]), Number(strokeColourArray[1]), Number(strokeColourArray[2]));
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