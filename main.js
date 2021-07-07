
//Change the span with the class mess-with-me to have a font size of 40px.
const spanChange = document.querySelector(".mess-with-me");
spanChange.style.fontSize ="40px";


//Change the paragraph with the class mess-with-me to have a background color of green.

spanChange.style.backgroundColor = 'green';

//Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!

const hideDino = document.querySelector("#hide-me-area");

hideDino.style.display = "none";


//Change the first dinosaur image so that the image's dimensions are 324 pixels wide.

const firstDinoImg = document.querySelector("#triceratops");

firstDinoImg.width = "324px";

//Event Listener Challenges

//Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

//const button =document.createElement("BUTTON");



spanChange.addEventListener("click", onClick) 

function onClick(){
    spanChange.style.color = "orange"

}

//Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.



firstDinoImg.addEventListener("click", onClick1);

function onClick1(){
    firstDinoImg.border = "5px solid #555"
}

//Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

const fiftyTransparent = document.querySelector("#feathers");

fiftyTransparent.addEventListener("click", onClicks);

function onClicks(){
    fiftyTransparent.style.opacity = "0.5";
}

//Add an event listener to the "Switch Background Color" button so that when it is clicked, we switch the background color of the row of dinosaurs to a color of your choice.

const backgroundButtonColor = document.querySelector("#toggle");

backgroundButtonColor.addEventListener("click", onClick3);

function onClick3(){
    backgroundButtonColor.style.background = "red";
}

//Add an event listener to the dinosaur with the id biggify that, when HOVERED, grows the image to 200 pixels wide. Note that this is a different event, and you'll likely need to do some research on what different string you'll need to pass. It's not gonna be click!

const hoverSize = document.querySelector("#biggify");



function mouseOver(){
    hoverSize.onmouseover.width = "200px";
}