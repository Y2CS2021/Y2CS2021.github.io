var canvasWidth = screen.width;
var canvasHeight = screen.height;
var happy = "DIE";
var optionsMenuShown = false;
var thickness = document.getElementById('thickness-slider').value;
var colourAlpha = document.getElementById('colour-alpha-slider').value;
var lineColour = document.getElementById('colour-picker').value;
var tool = "pen";
var vertices = [];

console.log(colourAlpha);

function updateThicknessValue(value) {
    thickness = value;
}

function updateColoursValue(value) {
    strokeColour = value;
    document.getElementById('colour-picker').value = rgbToHex(value.red, value.green, value.blue);
}

function rgbToHex(red, green, blue) {
    var r = Number(red).toString(16);
    if (r.length < 2) {
        r = "0" + r;
    }
    var g = Number(green).toString(16);
    if (g.length < 2) {
        g = "0" + g;
    }
    var b = Number(blue).toString(16);
    if (b.length < 2) {
        b = "0" + b;
    }
    return "#" + r + g + b;

}


function updateAlphaValue(value) {
    colourAlpha = value;
}



function showOptionsMenu(value) {
    var optionsMenu = document.getElementById('options');
    var showOptionsMenuButton = document.getElementById('showOptionsMenuButton');
    value ? optionsMenu.style.display = 'none' : value == null ? optionsMenu.style.display = optionsMenuShown ? 'none' : 'block' : optionsMenu.style.display = 'block';
    showOptionsMenuButton.style.display = 'none';
    optionsMenuShown = !optionsMenuShown;
}

function randomColour() {
    var randomColourValue = color(random(0, 255), random(0, 255), random(0, 255));
    updateColoursValue = randomColourValue;
}

function setTool(toolIn) {
    tool = toolIn;
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'b') {
        tool = "line";
        alert("line"); 
    }
	else if (event.key == 'p') {
		tool = "pen";
    }
    else if (event.key == 's') {
        tool = "shape";
    }
    if (event.key == 'm') {
        showOptionsMenu(!optionsMenuShown);
    }
});