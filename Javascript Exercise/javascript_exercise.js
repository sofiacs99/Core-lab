//toggle darkmode
var clickMeButton = document.querySelector(".example");

clickMeButton.addEventListener("click", function(){
  document.body.style.background = "url('https://i.ytimg.com/vi/VJdtDCHTfjc/maxresdefault.jpg')";
})

//toggle cutedog
var clickCircle = document.querySelector(".circle");
var dogPicture = document.querySelector(".cutedog");

clickCircle.addEventListener("click", function(){ dogPicture.classList.toggle("appear");
})
