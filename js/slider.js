$(function() {
  var slideShow = $('#slideshow'),
      firstSlide = slideShow.find("li:first-child"),
      lastSlide = slideShow.find("li:last-child"),
      interval = 4000,
      timer;

  slideshowImgCenter();
  slideshowTimeOut();
  slideshow();

  function slideshow(){
    $('.arrow-wrapper').find('div').on('click', function(){
       if ($(this).hasClass('left-arrow')){
        turnSlide();
       } else {
        turnSlide(true);
       }

    })
  }

  function slideshowImgCenter(){
    var imgs = $("#slideshow").find("img");
    imgs.each(function(){
      this.style.marginLeft = -(this.width/2) + 'px'
    });
  }

  function slideshowTimeOut(){
    setMyInterval();
    slideShow.mouseenter(function() {
      clearInterval(timer);
    }).mouseleave(function(){
      setMyInterval();
    });
  }

  function setMyInterval() {
    timer = setInterval(function(){turnSlide(true);}, interval);
  }

  function turnSlide(next) {
    var activeSlide = $('#slideshow').find('li.active'),
        nextSlide = next ? activeSlide.next("li") : activeSlide.prev("li"),
        edgeSlide = next ? firstSlide : lastSlide;

    activeSlide.removeClass("active");
    if(nextSlide.length < 1) nextSlide = edgeSlide;
    nextSlide.addClass("active");
  }

});
