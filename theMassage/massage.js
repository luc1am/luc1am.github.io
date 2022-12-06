

//let text = "It is a matter of the greatest urgency that our educational institutions realize that we now have civil war among these environments created by media other than the printed word. The classroom is now in a vital struggle for survival with the immensely persuasive 'outside' world created by new informational media. Education must shift from instruction, from imposing of stencils, to discovery —to probing and exploration and to the recognition of the language of forms."
distort("example text")

// let result = document.getElementById("quote")
// console.log(result)
// console.log(result.innerHTML)
// console.log(result.style.top, result.style.left);


let topLeft = document.getElementById("top-left");
console.log(topLeft.offsetHeight);
console.log(topLeft.offsetWidth);
let bttmRight = document.getElementById("bottom-right");
console.log(bttmRight.offsetHeight);
console.log(bttmRight.offsetWidth);


var topMargin1 = 8;
var bottomMargin1;
var leftMargin1 = 8;
var rightMargin1;

var topMargin2;
var bottomMargin2;
var leftMargin2;
var rightMargin2;

var grav = 0.8;
console.log(document.getElementById("theText").style.left);
//https://javascript.plainenglish.io/how-to-track-the-users-mouse-s-position-with-javascript-8b99defa8944
// document.onmousemove = (event) => {
//   const {
//     clientX,
//     clientY
//   } = event
//
//   bottomMargin1 = document.getElementById("top-left").offsetHeight + topMargin1;
//   rightMargin1 = document.getElementById("top-left").offsetWidth + leftMargin1;
//
//   //bottom right box;
//   topMargin2 = bottomMargin1;
//   leftMargin2 = rightMargin1;
//   bottomMargin2 = topMargin2 + document.getElementById("bottom-right").offsetHeight;
//   rightMargin2 = leftMargin2 + document.getElementById("bottom-right").offsetWidth;
//
//   let text = document.getElementById("theText").getElementsByTagName("div");
//
//   //https://stackoverflow.com/questions/11291300/how-to-loop-over-the-child-divs-of-a-div-and-get-the-ids-of-the-child-divs
//   for (var i = 0; i<text.length; i++){
//     var word = text[i].innerHTML;
//     text[i].style.position = 'absolute';
//     text[i].style.left = "5px";
//     //need tp stringify it and remove px;
//     //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
//     //let curr_ypos = parseFloat(text[i].style.top,10);
//
//     console.log(text[i].style.left);
//     let px = text[i].style.left.slice(0,-2);
//     let intPX = parseInt(px);
//     intPX+=3;
//     //console.log(intPX.toString()+'px')
//     text[i].style.left = (intPX.toString()+'px');
//     text[i]
//
//     //console.log(text[i].style.bottom);
//     //console.log(word_pos)
//
//
//     //text[i].style.top = "10px";
//
//     //console.log(word, word_pos);
//   }
//
// }

let text = document.getElementById("theText").getElementsByTagName("div");
for (var i = 0; i < text.length ;i++){
  text[i].addEventListener("mouseover",mouseOver);
  text[i].addEventListener("mouseout",mouseOut);
  text[i].style.position = 'absolute'
}

function mouseOver(){
  for (var i = 0; i < text.length ;i++){
    let num = Math.random()*300
    let left = num.toString() +"px"
    text[i].style.left = left;
    console.log(left)
    text[i].style.paddingTop = left;

  }
}

function mouseOut(){
  for (var i = 0; i < text.length ;i++){
    text[i].style.paddingTop = "1px";

  }
}

function distort(text){

  let text_arr = text.split("");
  console.log(text_arr);

}
