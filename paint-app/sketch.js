
var colour = 'black', colours = ['red', 'green', 'blue'], index = 0, randomColour = false, optionsMenu = false, happy;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  background(220);
  textSize(20);
  textStyle(BOLD);
  noStroke();
  
  slider = createSlider(1, 40, 10);
  slider.position(5, height - 20);
  
  sliderRed = createSlider(1, 255, 10);
  sliderRed.position(5, 30);
  
  sliderGreen = createSlider(1, 255, 10);
  sliderGreen.position(5, 80);
  
  sliderBlue = createSlider(1, 255, 10);
  sliderBlue.position(5, 130);
  
  sliderAlpha = createSlider(1, 255, 255);
  sliderAlpha.position(5, 180);
    print(rect(0, 0, 150, height));

  canvas.canvas.hide = true;
  drawPaintScene();
  
}

function draw() {
  fill(240);  
  
  colour = color(red(colour), green(colour), blue(colour), sliderAlpha.value());
  
  if (!randomColour) {
    colour = color(sliderRed.value(), sliderGreen.value(), sliderBlue.value(), sliderAlpha.value());
  }
  
  
  button(0, 0, 50, 30, function() {
    optionsMenu ? drawPaintScene() : drawOptionsMenu();    
  });

}


function drawOptionsMenu() {
  cnv = canvas;
  
  var a = happy != null ? happy : "Thick"
  slider.show();
  sliderRed.show();
  sliderGreen.show();
  sliderBlue.show();
  sliderAlpha.show();
  
  print(rect(0, 0, 150, height));
  
  
  fill(0)
  text(a, 5, height - 25);
  
  
  
  fill(0);
  buttons();
  
  
  optionsMenu = true;
  
}

function drawPaintScene() {
  slider.hide();
  sliderRed.hide();
  sliderGreen.hide();
  sliderBlue.hide();
  sliderAlpha.hide();
  
  
  optionsMenu = false;
}


function mouseDragged() {
  fill(colour);
  //ellipse(mouseX, mouseY, slider.value());
  stroke(0, 0, 0, colourAlpha);
  strokeWeight(thickness);
  
  console.log(thickness);
  console.log(colourAlpha);
  line(pmouseX, pmouseY, mouseX, mouseY);
}



  var randomColour1, randomColour2;

function buttons() {
  
  if (index == 0) {
    randomColour1 = randomColour2 != null ? randomColour2 : color(random(0, 255), random(0, 255), random(0, 255), sliderAlpha.value());
    randomColour2 = color(random(0, 255), random(0, 255), random(0, 255), sliderAlpha.value());
  }
  else if (index >= 100) {
    index = -1;
  }
  
  
  lerpedColour = lerpColor(randomColour1, randomColour2, index/100);
  if (index == 0) {
    print(0);
  }
  
  index++;
  
/*  
  fill('red');
  rect(5, 20, 135, 40);
  fill('green');
  rect(5, 70, 135, 40);
  fill('blue');
  rect(5, 120, 135, 40);
*/  
  
  
  fill('red');
  button(5, 20, 135, 40, function() {
    randomColour = false;
});
  fill('green');
  button(5, 70, 135, 40, function() {
    randomColour = false;
  });
  fill('blue');
  button(5, 120, 135, 40, function() {
    randomColour = false;
  });
  fill(0);
  text("Alpha", 200, 200);
  fill('white');
  button(5, 170, 135, 40, function() {
  });

  fill(lerpedColour);
  button(10, 220, 75, 40, function() {
    colour = lerpedColour;
    randomColour = true;
  });

  fill(0);
  textSize(18);
  text("Random", 12, 245);
  
  
}

function button(x, y, w, h, onPressed) {
  rect(x, y, w, h);
  if (mouseIsPressed && (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)) {
        onPressed();
  }
}
class Button {
  
  constructor(x, y, w, h, onPressed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  doStuff() {
    rect(x, y, w, h);
    if (mouseIsPressed && (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)) {
        onPressed();
    }
  }

  
}
