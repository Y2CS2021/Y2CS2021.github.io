var canvasWidth = screen.width;
var canvasHeight = screen.height;
var happy = "DIE";
var optionsMenuShown = false;
var colourAlpha = document.getElementById('colour-alpha-slider').value;
var lineColour = document.getElementById('colour-picker').value;
var tool = "pen";
var vertices = [];

console.log(colourAlpha);

function updateThicknessValue(value) {
    thickness = value;
}

function updateColoursValue(value) {
    strokeColourArray = value;
    document.getElementById('colour-picker').value = rgbToHex(value[0], value[1], value[2]);
}

function updateColoursValueHex(hex) {
    alert(hex);
    updateColoursValue(hexToRgb(hex.substring(1)));
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

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
	var rgb = [r, g, b]
    return rgb;
}


function updateAlphaValue(value) {
    colourAlpha = value;
}



function showOptionsMenu(value) {
    var optionsMenu = document.getElementById('options');
    value ? optionsMenu.style.display = 'none' : value == null ? optionsMenu.style.display = optionsMenuShown ? 'none' : 'block' : optionsMenu.style.display = 'block';
    optionsMenuShown = !optionsMenuShown;
}

function randomColour() {
    var randomColourValue = [Math.floor(Math.random * 255), Math.floor(Math.random * 255), Math.floor(Math.random * 255)];
    updateColoursValue(randomColourValue);
}

function setTool(toolIn) {
    tool = toolIn;
    alert("In:" + toolIn + "Tool" + tool);
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'l') {
        tool = "line";
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
    if (event.key == 'h') {
        document.getElementById('help').style.display='none';
    }
});