var canvasWidth = screen.width;
var canvasHeight = screen.height;
var happy = "DIE";
var optionsMenuShown = true;
var menuColourShown = false;
var lineColour = document.getElementById('colour-picker').value;
var tool = "pen";
var vertices = [];
var menuColourArray = [];


function updateThicknessValue(value) {
    thickness = value;
}

function updateColoursValue(value, type) {
    switch (type) {
        case "brush":
            strokeColourArray = value;
            document.getElementById('colour-picker').value = rgbToHex(value[0], value[1], value[2]);
            break;
        case "canvas":
            var confirmation = confirm("Changing the canvas colour will delete the current canvas. Are you sure you want to continue?");
            if (confirmation) {
                canvasColourArray = value;
                changeCanvasColour();
                document.getElementById('canvas-colour-picker').value = rgbToHex(value[0], value[1], value[2]);
            }
            else {
                document.getElementById('canvas-colour-picker').value = rgbToHex(canvasColour[0], canvasColour[1], canvasColour[2]);
            }
            break;
        case "menu":
            menuColourArray = value;
            var menuColourHex = rgbToHex(menuColourArray[0], menuColourArray[1], menuColourArray[2]);
            document.getElementsByTagName("options")[0].style.backgroundColor = menuColourHex;
            break;
        default:
            strokeColourArray = value;
            document.getElementById('colour-picker').value = rgbToHex(value[0], value[1], value[2]);
    }
}



function updateColoursValueHex(hex, type) {
    if (hex.length == 7 && hex.charAt(0) == "#") {
        if (type == "menu") {
            document.getElementById('indicator').setAttribute("src", "valid.png");
        }
        updateColoursValue(hexToRgb(hex.substring(1)), type);
    }
    else if (type == "menu") {
        document.getElementById('indicator').setAttribute("src", "invalid.png");
    }
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

function showMenuColourOptions(value) {
    var menuColour = document.getElementById('menuColour');
    value ? menuColour.style.display = 'none' : value == null ? menuColour.style.display = menuColourShown ? 'none' : 'block' : menuColour.style.display = 'block';
    menuColourShown = !menuColourShown;
}

function randomColour() {
    var randomColourValue = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    updateColoursValue(randomColourValue, "brush");
}

function randomCanvasColour() {
    var randomColourValue = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];
    updateColoursValue(randomColourValue, "canvas");
}

function setTool(toolIn) {
    if (toolIn != null) {
        tool = toolIn;
        switch(toolIn) {
            case "pen":
                document.getElementsByTagName('canvas')[0].style.cursor = "crosshair";
                break;
            case "line":
                document.getElementsByTagName('canvas')[0].style.cursor = "cell";
                break;
            case "eraser":
                document.getElementsByTagName('canvas')[0].style.cursor = "url('eraser.png'), auto";
                break;
                
        }
    }
    else {
        var index = document.getElementById("toolSelect").selectedIndex;
        switch(index) {
            case 0:
                tool = "pen";
                document.getElementsByTagName('canvas')[0].style.cursor = "crosshair";
                break;
            case 1:
                tool = "line";
                document.getElementsByTagName('canvas')[0].style.cursor = "cell";
                break;
            case 2:
                tool = "eraser";
                document.getElementsByTagName('canvas')[0].style.cursor = "url('eraser.png'), auto;";
                break;

        }
    }
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'l') {
        setTool("line");
    }
	else if (event.key == 'p') {
		setTool("pen");
    }
    /*
    else if (event.key == 's') {
        setTool("shape");
    }
    */
    else if (event.key == 'e') {
        setTool("eraser");
    }
    else if (event.key == 'm') {
        showOptionsMenu(optionsMenuShown);
    }
    else if (event.key == 'h') {
        document.getElementById('help').style.display='none';
    }
    else if (event.key == 'r') {
        randomColour();
    }
    else if (event.key == 'c') {
        clearCanvas();
    }
});