var start;
var end;
var strokeColourArray;
var strokeColour;
var thickness;
var colourAlpha;
var canvasColour = 255;
var canvasColourArray;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(canvasColour);
  noStroke();
  strokeColourArray = hexToRgb(String(document.getElementById('colour-picker').value).substring(1));
  thickness = document.getElementById('thickness-slider').value;
}

function draw() {
	document.getElementById('test').innerHTML = tool;
}

function mouseDragged() {
	if (tool == "pen") {
	  var strokeColour = color(Number(strokeColourArray[0]), Number(strokeColourArray[1]), Number(strokeColourArray[2]));
	  stroke(red(strokeColour), green(strokeColour), blue(strokeColour));
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

function changeCanvasColour() {
	canvasColour = color(canvasColourArray[0], canvasColourArray[1], canvasColourArray[2]);
	background(canvasColour);
}

function mousePressed() {
	if (tool == "line") {
    	start = createVector(mouseX, mouseY);
		print('started');
	}
}
function mouseReleased() {
	if (tool == "line") {
		end = createVector(mouseX, mouseY);
		stroke(red(strokeColour), green(strokeColour), blue(strokeColour));
		strokeWeight(thickness);
		alert(thickness);
		alert(rgb(red(strokeColour), green(strokeColour), blue(strokeColour)));
		line(start.x, start.y, end.x, end.y);
  	}

}