$(document).ready(function(){

    //STIKY NAVIGATION
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else{
            $("nav").removeClass("sticky");
        }
    });


    //MIXITUP PORTFOLIO
    var mixer = mixitup('.pf-container');
});