
let val;
let subTit, inputField, refresh;
let slider;


// class Stroke{
//   constructor(key){
//     this.key = key;
//   }
//   display(){
//     text
//   }
// }


function setup() {
  createCanvas(windowWidth-200,windowHeight);
  inputField = createInput();
  inputField.position(width+15, 100);
  subTit = createP('enter char here');
  subTit.position(width+15, 65);
  refresh = createButton('refresh');
  refresh.position(width+15, 125);
  refresh.mousePressed(newScreen);
  slider = createSlider(5,40,26,1);
  slider.position(width+15, 150);

  background(255);
}

function draw() {

  frameRate(slider.value());

  if (mouseIsPressed){
    val = inputField.value();
    if (val ==''){
      val = '.';
    }
    textSize(32);
    text(val, mouseX, mouseY);
  }
}

function newScreen(){
  background(200);
}

// function mouseDragged(){
//   rectMode(CENTER);
//   val = inputField.value();
//   if (val ==''){
//     val = '.';
//   }
//   textSize(32);
//   text(val, mouseX, mouseY);
//   console.log(val);
// }
