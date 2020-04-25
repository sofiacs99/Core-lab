
var request = new XMLHttpRequest();

request.open('GET' , 'http://api.are.na/v2/channels/empire-state-building-kqkszdyqsuw/contents');

request.onload = function() {

    var response = request.response;
    var parsedData = JSON.parse(response).contents;

    console.log(parsedData);
    for (var i = 1; parsedData.length; i++) {
        console.log(parsedData[i].image.square.url);

        var newImage = document.createElement("img")
        newImage.src = parsedData[i].image.large.url;

        var demo = document.querySelector(".demo");

        demo.appendChild(newImage);

    }

}

request.send();