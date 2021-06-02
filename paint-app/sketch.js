var start;
var end;
var strokeColourArray;
var strokeColour;
var thickness;
var colourAlpha;



function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(255);
  noStroke();
  strokeColourArray = hexToRgb(String(document.getElementById('colour-picker').value).substring(1));
  thickness = document.getElementById('thickness-slider').value;
  //colourAlpha = document.getElementById('colour-alpha-slider').value;
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