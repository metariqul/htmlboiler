(function ($) {
    "use strict";

      
    /*=========================================================================
            Vertical Menu
    =========================================================================*/

    $( ".submenu" ).before( '<i class="fas fa-angle-down switcher"></i>' );

    $(".vertical-menu li i.switcher").on( 'click', function() {
        var $submenu = $(this).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

        /*=========================================================================
            Canvas Menu
    =========================================================================*/
    $("button.burger-menu").on( 'click', function() {
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
      });
  
      $(".canvas-menu .btn-close, .main-overlay").on( 'click', function() {
        $(".canvas-menu").removeClass("open");
        $(".main-overlay").removeClass("active");
      });

      
  // Sticky Menu
    /*************************************   
  Sticky Menu
   **************************************/
  let sticky = $('.sticky');
  let win = $(window);
  win.on('scroll', function () {
      let scroll = win.scrollTop();
      if (scroll < 1) {
          sticky.removeClass("is-sticky");
      } else {
          sticky.addClass("is-sticky");
      }
  });

    let quote = $('.claim-carousel');

    quote.owlCarousel({
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        responsiveClass: true,
        items: 1,
        navText: ['<img src="../images/left.png">','<img src="../images/right.png">']
    });

   

})(jQuery);
