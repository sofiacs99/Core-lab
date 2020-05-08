$(function(){
    $(".draggable").draggable({
        stack: ".draggable",
        containment: ".container",
    });

})

var audioBox = document.querySelector(".audiobox");
var liveVideoImage = document.querySelector(".live_video");


liveVideoImage.addEventListener("mouseover", function() {
    audioBox.play();
})
