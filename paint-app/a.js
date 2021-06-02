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
    alert(strokeColour);
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

function randomColour(value) {
    strokeColour = value;
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