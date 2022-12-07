
var button=document.querySelectorAll(".drum");



for(var i =0;i<button.length;i++){ 
button[i].addEventListener("click",function(){
  var  click = this.innerText;
  sound(click);
  buttonAnimation(click);
});
}


document.addEventListener("keydown",function(event){
    console.log(event)
     sound(event.key);
     buttonAnimation(event.key);

})

function sound(key){
    switch(key){
        case "w":
          var song1 = new Audio("sounds/crash.mp3");
          song1.play();
          break;
        case "a":
          var song2 = new Audio("sounds/kick-bass.mp3");
          song2.play();
          break;
        case "s":
          var song3 = new Audio("sounds/snare.mp3");
          song3.play();
          break;
        case "d":
          var song4 = new Audio("sounds/tom-1.mp3");
          song4.play();
          break;
        case "j":
          var song5 = new Audio("sounds/tom-2.mp3");
          song5.play();
          break;
        case "k":
          var song6 = new Audio("sounds/tom-3.mp3");
          song6.play();
          break;
        case "l":
          var song7 = new Audio("sounds/tom-4.mp3");
          song7.play();
          break;
          default: console.log(key);

    }
}

function buttonAnimation(c){
    var btn=document.querySelector("."+c);
    btn.classList.add("pressed");
    setTimeout(function(){
    btn.classList.remove("pressed"); },100);
}





