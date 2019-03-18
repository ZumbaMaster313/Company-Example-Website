
$(document).ready(function(){

    $(window).ready(function(){
        var wH = $(window).height();
        var wW = $(window).width();

          if (wW <= 1200) {
            $('.wrapper').fadeIn("slow", function(){
              $('.wrapper').css('background-image', 'url("' + "https://www.transparenttextures.com/patterns/cubes.png" + '")');
            });
            $('.left').hide();
            $(".centered").css({"left": "50%"});
          } else{
            $('.wrapper').css('background-image', 'url("' + "https://www.transparenttextures.com/patterns/cubes.png" + '")');
            $('.left').show();
            $(".centered").css({"left": "63%"});
          }

          if($(window).height() <= 634){
            $(".wrapper").css({"overflow-y": "scroll"});
            $(".aroundThere").css({"top": "360px"});
            $(".centered").css({"top": "360px"});
          }
          else{
            $(".wrapper").css({"overflow-y": "hidden"});
            $(".aroundThere").css({"top": "52%"});
            $(".centered").css({"top": "52%" });
          }

    });

});

$(document).ready(function(){

    var ResizeTimer;

    $(window).resize(function(){
        clearTimeout(ResizeTimer);
        ResizeTimer = setTimeout(function(){

        var wW = $(window).width();

        if (wW <= 1200) {
          $('.wrapper').fadeIn("slow", function(){
              $('.wrapper').css('background-image', 'url("' + "https://www.transparenttextures.com/patterns/cubes.png" + '")');
          });
          $('.left').fadeOut("fast");
          $('.centered').animate({left: "50%"}, "slow");
        } else{
          $('.wrapper').css('background-image', 'url("' + "https://www.transparenttextures.com/patterns/cubes.png" + '")');
          $('.left').fadeIn("fast");
          $(".centered").css({"left": "63%"});
        }

        if($(window).height() <= 634){
          $(".wrapper").css({"overflow-y": "scroll"});
          $(".left").css({"height": "640px"});
          $(".aroundThere").css({"top": "360px"});
          $(".centered").css({"top": "360px"});
        }
        else{
          $("wrapper").css({"overflow-y": "hidden"});
          $(".left").css({"height": "100vh"});
          $(".aroundThere").css({"top": "52%"});
          $(".centered").css({"top": "52%" });
        }
          
        },200); 
    });

});

$(document).ready(function(){
  
  $(".signup").click(function() {

    var pT = $("input[name='password']").val();
    var pC = $("input[name='passwordConfirmed']").val();
    if(pT != pC){
      alert("Passwords do not match.");
    }

    if((!$("#passwordTxt").val()) || (!$("#passwordTxtComfirmed").val())){
      alert("Password is empty");
    }

    if (!$("#usernameTxt").val()){
      alert("Username is empty");
    }

  });
});

$(document).ready(function(){
  
  $(".turnIn").click(function() {


    if(!$("#passwordTxt").val()){
      alert("Password is empty");
    }

    if (!$("#usernameTxt").val()){
      alert("Username is empty");
    }

  });
});