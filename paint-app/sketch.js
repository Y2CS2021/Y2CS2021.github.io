var start;
var end;
var strokeColourArray;
var strokeColour;
var thickness;
var colourAlpha;
var canvasColour;
var canvasColourArray;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvasColour = color(255, 255, 255);
  background(canvasColour);
  noStroke();
  strokeColourArray = hexToRgb(String(document.getElementById('colour-picker').value).substring(1));
  thickness = 25;
  canvasColour = color(255, 255, 255);
}

function draw() {
	document.getElementById('test').innerHTML = thickness;
	console.log(strokeColourArray);
}

function mouseDragged() {
	if (tool == "pen") {
		if (strokeColourArray != null && strokeColourArray.length > 0) {
			strokeColour = color(Number(strokeColourArray[0]), Number(strokeColourArray[1]), Number(strokeColourArray[2]));
		}
		else {
			strokeColour = color(0, 0, 0);
		}
		stroke(red(strokeColour), green(strokeColour), blue(strokeColour));
		strokeWeight(thickness);
	  
	  line(pmouseX, pmouseY, mouseX, mouseY);
	}
	else if (tool == "eraser") {
		stroke(red(canvasColour), green(canvasColour), blue(canvasColour));
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
	if (canvasColourArray != null && canvasColourArray.length > 0) {
		canvasColour = color(canvasColourArray[0], canvasColourArray[1], canvasColourArray[2]);
	}
	background(canvasColour);
}

function clearCanvas() {
	var confirmation = confirm("Clearing the canvas will delete the current canvas. Are you sure you want to continue?");
	if (confirmation) {
		background(canvasColour);
	}
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
		//stroke(red(strokeColour), green(strokeColour), blue(strokeColour));
		strokeWeight(thickness);
		alert(strokeColour);
		line(start.x, start.y, end.x, end.y);
  	}

}