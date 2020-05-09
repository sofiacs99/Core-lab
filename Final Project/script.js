$(function(){
    $(".draggable").draggable({
        stack: ".draggable",
        containment: ".container",
    });

})

var audioBox = document.querySelector(".audiobox");
var liveVideoImage = document.querySelector(".live_video");

liveVideoImage.addEventListener("click", function() {
    audioBox.play();
})

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("live_video");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 600);
}
