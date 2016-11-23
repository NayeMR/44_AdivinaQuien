
$(document).ready(function(){
   $("#morada").click(function(){//evento1
    $("#morada").hide();
  });
  $('.ol').on('click',function(){ //evento-2
    $('.ol').css('color','#008080');
  });
  $(".cuadro1").hover(function(){//evento-3
        $(this).css("background-color", "pink");
        }, function(){
        $(this).css("background-color", " #191919");
  });
  $(".large").click(function(){//evento-4
        $(".large").animate({height: "300px"});
  });
  $(".large").click(function(){
        $(".large").animate({height: "100%"});
  });
  $('#inputSearch').focus(function(){//evento-5
  	$(this).css("background-color", "pink");
  })
});