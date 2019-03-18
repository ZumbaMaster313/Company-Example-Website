
$(document).ready(function(){

    $(window).ready(function(){

        var wW = $(window).width();

          if (wW <= 900) {
            $('#b').text("The versatile Remote Access tool that supports any business needs.");
            $("li:not(:first)").hide();
            $('.comp').show();
            $('.wrapper').show();
            $(".middleM").fadeIn("slow");
            $('#backgroundA').fadeIn("slow");
            $(".boxB").css({"width": "410px"});
            $('.cooler').show();
            $('.center').hide();
            $("#backgroundA").css({"height": "920px"});
            $("#background").css({"top": "920px"});
          } else{ 
            $("#backgroundA").css({"height": "830px"});
            $("#background").css({"top": "830px"});
            $('.cooler').hide();
            $(".boxB").css({"width": "700px"});
            $('.hidden').show();
            $('.wrapper').hide();
          }
    });

});

$(document).ready(function(){

    var ResizeTimer;

    $(window).resize(function(){
        clearTimeout(ResizeTimer);
        ResizeTimer = setTimeout(function(){

        var wW = $(window).width();

        if (wW <= 900) {
            $('#b').text("The versatile Remote Access tool that supports any business needs.");
            $("li:not(:first)").hide();
            $('.comp').show();
            $(".boxB").css({"width": "420px"});
            $('.wrapper').fadeIn("slow"); 
            $('.cooler').fadeIn("slow");
            $('.center').fadeOut("fast");
            $("#backgroundA").css({"height": "920px"});
            $("#background").css({"top": "920px"});
        } else{
            $("#backgroundA").css({"height": "830px"});
            $("#background").css({"top": "830px"});
            $('.center').fadeIn("slow");
            $('.cooler').fadeOut("fast");
            $('#b').text("Rapter is a Remote Access Portal that allows you to access virtual desktops to view your employees' information.");
            $(".boxB").css({"width": "700px"});
            $(".middleB").css({"left": "50%", "text-align": "center"})
            $('.hidden').fadeIn("slow");
            $('.wrapper').hide();
        }

        },200); 
    });

});

$(document).ready(function(){
    var open = false;
    $('.wrapper2').hide();
    $(".navbar").click(function() {
        open = !open;

        if(open){
            $(".first").css({"transform": "translateY(10px) rotate(45deg)", "transition": "all 0.5s ease"})
            $(".second").css({"opacity": "0", "transition": "all 0.2s ease",});
            $(".third").css({"transform": "translateY(-10px) rotate(-45deg)", "transition": "all 0.5s ease"});
            $("body").css({"background-color": "#434C57"});
            $(".loginStyle").css({"color": "#434C57"});
            $('.original').children("div").each(function( ) {
                if ($(this).is(".wrapper")) {
                    $(this).show();
                    return false;
                }
                else{
                    $(this).hide();
                }
             
            });
            $(".original").css({"overflow-y": "hidden"});
            $('.loginButton').hide()
            $('.wrapper2').fadeIn("slow");
            $('.buttons').fadeIn("slow");


        } else {
            $(".first").css({"transform": "translateY(0px) rotate(0deg)", "transition": "all 0.5s ease"})
            $(".second").css({"opacity": "100", "transition": "all 0.2s ease",});
            $(".third").css({"transform": "translateY(0px) rotate(0deg)", "transition": "all 0.5s ease"});
            $("body").css({"background-color": "rgb(205, 73, 82)"});
            $(".loginStyle").css({"color": "rgb(205, 73, 82)"});
            $('.wrapper2').hide();
            $('.loginButton').fadeIn();
            $(".original").css({"overflow-y": "scroll"});
            $('.original').children("div").each(function( ) {
                $(this).fadeIn("slow");
                
            });
        }

    });
});