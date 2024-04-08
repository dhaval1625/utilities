const slider = $(".slider-item");
slider
  .slick({
    dots: true
  });
//Implementing navigation of slides using mouse scroll
slider.on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));