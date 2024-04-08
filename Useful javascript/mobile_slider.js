// requirements - only works with jquery loaded and slick sliders.

function initMobileOnlySlider(elSelector, sliderConfig,) {
   function initSlider() {
      $(elSelector).slick(sliderConfig);
   }
   if (window.innerWidth < 991) {
      initSlider();
   }

   $(window).resize(function () {
      if (window.innerWidth < 991) {
         if (!$(elSelector).hasClass('slick-initialized')) {
            initSlider();
         }
      } else {
         if ($(elSelector).hasClass('slick-initialized')) {
            $(elSelector).slick('unslick');
         }
      }
   });
}

// Usage 

initMobileOnlySlider('.hfs-asSeenIn__carousel', {
   infinite: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   centerMode: false,
   responsive: [
      {
         breakpoint: 650,
         settings: {
            slidesToShow: 2
         }
      },
      {
         breakpoint: 500,
         settings: {
            slidesToShow: 1
         }
      },
   ]
});