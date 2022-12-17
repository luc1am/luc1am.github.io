var source = document.getElementById("pixel");
var destination = document.getElementById("knit2");


for (let i = 0; i <100; i ++){
    let clone = source.cloneNode(true);
    clone.removeAttribute("id");
    destination.appendChild(clone);

}

// // https://www.w3schools.com/jsref/event_onclick.asp
// svg.onclick = function(){clickFunction()};

// function clickFunction(){
//     svg.setProperty("fill", "pink")
// }


// https://www.javascripttutorial.net/dom/css/get-and-set-scroll-position-of-an-element/

const scrollDem = document.querySelector(".text");
const output = document.querySelector(".text");

scrollDem.addEventListener("scroll", event => {



    let curr = output.style.left; 
    curr = curr.slice(0,-2);
    let currInt = parseInt(curr);
    currInt+=scrollTop;
    output.style.left = currInt.toString() + "px";
}, {passive: true});


window.addEventListener('scroll', (e) => {
    console.log(document.documentElement.scrollTop);
    let text = document.querySelector(".text");
    console.log(text.style.left);
    console.log(text.style.left.slice(0,-2));
  })
