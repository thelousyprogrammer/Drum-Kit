var drumArray = document.querySelectorAll(".drum")

for (let i = 0; i < drumArray.length; i++) {
  drumArray[i].addEventListener("click", function(event) {
    playSound(event.srcElement.innerHTML);
    buttonAnimation(event.srcElement.innerHTML);
  });
}

function playSound(myLetter) {

  switch (myLetter) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      break;
    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default:
      console.log(myLetter)
    }}

document.addEventListener("keydown",function(event) {
  playSound(event.key);
  buttonAnimation(event.key);

});

function buttonAnimation(myLetter) {
  var activeButton = document.querySelector("." + myLetter)
  activeButton.classList.add("pressed")
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100)
}
