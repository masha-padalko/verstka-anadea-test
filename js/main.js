$(document).ready(function(){
	topMenuResponse(); // Top menu response
});

$(document).resize(function(){
	topMenuResponse(); // Top menu response on resize
});

function topMenuResponse(){
	
	var topMenu          = $("#top-nav-menu"),
		navResponseToggle = topMenu.find(".nav-response-toggle");
		
	navResponseToggle.on('click', function(){
		$(".top-nav-menu>ul").slideToggle();
	});
}