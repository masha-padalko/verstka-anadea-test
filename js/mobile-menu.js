(function topMenuResponse(){

  var topMenu = $("#top-nav-menu"),
  buttonResponseToggle = topMenu.find(".nav-response-toggle");
  navResponseToggle = topMenu.find(">ul");

  buttonResponseToggle.on('click', function(){
    navResponseToggle.slideToggle();
  });

})();
