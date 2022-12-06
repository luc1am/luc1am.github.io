
console.log("the message!");

let theUser = "rebecca"
let aNum = 579809
//button position x coor
let buttonPosX = "50vw";
let buttonPosY = "50vh";
let isClicked = false;



//https://stackoverflow.com/questions/1248081/how-to-get-the-browser-viewport-dimensions
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

console.log(vw,vh)


console.log(theUser + " " +aNum)

const theButton = document.querySelector('button');
theButton.style.backgroundColor = "#7ed68a"
theButton.style.border = "0px solid black"

let theBody = document.querySelector('body');

let theTxt = document.getElementById('theText');

// event listener
theButton.addEventListener('click', beTheChange)
theButton.style.top = buttonPosX;
theButton.style.left = buttonPosY;
//


//https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
//gives us px position of the button
var buttOffset = offset(theButton);
console.log(buttOffset.left, buttOffset.top);


//https://developer.m ozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


//https://javascript.plainenglish.io/how-to-track-the-users-mouse-s-position-with-javascript-8b99defa8944
document.onmousemove = (event) => {
  const {
    clientX,
    clientY
  } = event

  //console.log(clientX,clientY);
  //console.log((buttOffset.left-20), buttOffset.left+112+20);
//if the cursor is approaching the button with a padding of 100 px
//112 approximate width of the button
//&&((buttOffset.top-50)<clientY<(buttOffset.top+88+50)))
  if ((clientX>(buttOffset.left -50))&& (clientX < buttOffset.left + 112 + 50)){
    if ((clientY> (buttOffset.top -50))&& (clientY<buttOffset.top +88+50)){
      //console.log("get away!!!!");
      let newPosX = getRandomInt(100);
      let newPosY = getRandomInt(100);
      buttonPosX = newPosX.toString() +"vw"
      buttonPosY = newPosY.toString() +"vh"
      theButton.style.top = buttonPosX;
      theButton.style.left = buttonPosY;
      buttOffset = offset(theButton);

    }

  }
  // let numx = (clientX/vw)*100;
  // let numy = (clientY/vh)*100
  // let relativeW = numx.toString() + "vw";
  // let relativeH = numy.toString() + "vh";
  // console.log(relativeW, relativeH);
}



function beTheChange(){
  if (!isClicked){
    console.log("you clicked!");
    //theBody.style.backgroundColor = "blue"
    theTxt.textContent = "but not too alone"
    isClicked = true;
  } else{
    theTxt.textContent = "please leave me alone"
    let newPosX = getRandomInt(100);
    let newPosY = getRandomInt(100);
    buttonPosX = newPosX.toString() +"vw"
    buttonPosY = newPosY.toString() +"vh"
    theButton.style.top = buttonPosX;
    theButton.style.left = buttonPosY;
    buttOffset = offset(theButton);
    isClicked = false;

  }

}

console.log(theTxt.textContent)
