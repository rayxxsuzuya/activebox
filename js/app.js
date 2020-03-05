$(function() {

    // let preHeader = $('#pre-header');
    // let headerIntro = $('#header-intro');
    // let scrollPos = $(window).scrollTop();
    
    // $(window).on('scroll load resize', function() {
    //     scrollPos = $(this).scrollTop();

    //     checkScroll();
    // });  

    // function checkScroll() {
    //     if(scrollPos > headerIntro.innerHeight()) {
    //         preHeader.addClass('fixed');
    //     } else {
    //         preHeader.removeClass('fixed');
    //     }
    // }


    // Smooth scroll 

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $('html, body').animate({
            scrollTop: elementOffset
        }, 700);

        nav.toggleClass('nav-show');
    });

    let nav = $('#nav');
    let navButton = $('#navButton');

    navButton.on('click', function() {
        nav.toggleClass('nav-show');
    });

    // Reviews slider
    let slider = $('#reviewsSlider');

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});