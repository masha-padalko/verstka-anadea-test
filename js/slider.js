$(function() {

  var itemSlider = $("#slideshow").find("li:eq(0)");
      setTimeout(function(){
          itemSlider.fadeOut();
          itemSlider.next().fadeIn("li");
      }, 4000 );

});
