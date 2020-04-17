$(function(){
    $(".draggable").draggable({
        stack: ".draggable",
        containment: ".container"
    });

    $(".switch").click( function() {
        $(".container").toggleClass("darkmode");
    })

    $(".clickme").click( function() {
        $(".extra-info").fadeToggle("hide");
    })

    $(".hoverme").hover( function() {
        $(".gif").fadeToggle("gif");
    })

    $(".draggable2").draggable({
        axis: "x"
    });

    $(".draggable2").draggable({
        stack: ".draggable",
        containment: ".container"
    });

    $(".portrait").click( function() {
        $(".portrait").animate({
            width: "600px",
            height: "600px"
        })
    })

})