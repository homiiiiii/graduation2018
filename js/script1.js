$(document).ready(function() {
    $(".bg_load").fadeOut("slow");
    $(".loader").fadeOut("slow");

    $('#fullpage').fullpage({
		continuousVertical: true
		});

  	$(".fp-section").on("mousemove",function(e){ 
  		var posX= e.pageX; var posY= e.pageY; 
	  	$(".circle1").css({"left":-10-(posX/40)});
	  	$(".tri1").css({"left":210-(posX/60)});
	  	$(".square1").css({"left":280-(posX/20)});
	  	$(".circle2").css({"right":80-(posX/40)});
	  	$(".tri2").css({"right":255-(posX/20)});
	  	$(".square2").css({"right":-150-(posX/20)}); 
	  });
});