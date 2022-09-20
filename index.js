const btn = document.querySelectorAll("button")
btn.forEach((button) => {
  button.addEventListener("click", ()=> {
    var audio = new Audio(sound(button));
    audio.play();
  })
});

function sound(button){
  var audioUrl;
  switch(button.textContent) {
  case "w":
    return audioUrl = "sounds/tom-1.mp3";
  case "a":
    return audioUrl = "sounds/tom-2.mp3";
  case "s":
    return audioUrl = "sounds/tom-3.mp3";
  case "d":
    return audioUrl = "sounds/tom-4.mp3";
  case "j":
    return audioUrl = "sounds/snare.mp3";
  case "k":
    return audioUrl = "sounds/crash.mp3";
  default:
    return audioUrl = "sounds/kick-bass.mp3";
}

}
