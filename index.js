const buttonCount = document.querySelectorAll(".drum").length;

for (let i = 0; i < buttonCount; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInner = this.innerHTML.trim(); // Get button text
    makesound(buttonInner);
    buttonanimation(buttonInner);
  });
}

document.addEventListener("keypress", function(event) {
  makesound(event.key);
  buttonanimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "p":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "q":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "i":
      new Audio("sounds/tom-4.mp3").play();
      break;
    case "u":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "e":
      new Audio("sounds/snare.mp3").play();
      break;
    case "y":
      new Audio("sounds/tom-1.mp3").play();
      break;
    default:
      console.log("Unrecognized key: " + key);
  }
}

function buttonanimation(currentkey){
    document.querySelector("."+currentkey).classList.add("presed");
    setTimeout(function(){
      document.querySelector("."+currentkey).classList.remove("presed");

    }, 100);


}
