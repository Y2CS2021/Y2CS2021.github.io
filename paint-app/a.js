var canvasWidth = screen.width;
var canvasHeight = screen.height;
var happy = "DIE";
var optionsMenuShown = false;
var thickness = document.getElementById('thickness-slider').value;
var colourAlpha = document.getElementById('colour-alpha-slider').value;
var lineColour = document.getElementById('colour-picker').value;
var tool = "pen";

console.log(colourAlpha);

function updateThicknessValue(value) {
    thickness = value;
}

function updateColoursValue(value) {
    lineColour = value;
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

function Tool(tool) {
	this.tool = tool;
}


document.addEventListener('keydown', function(event) {
    if(event.key == 'Control' || event.key == 'b') {
        tool = "line";
        alert("line"); 
    }
});