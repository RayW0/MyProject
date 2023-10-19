/*************************************************
	1. use strict
	2. Preloader
	3. baguetteBoxOne map 	
	4. owlCarousel
	5. Affix
	6. Counter
	7. map scroll off 
	8. offset
	9. scrolling
*************************************************/
(function($) {
    // Start of use strict
"use strict";

/*------------------------------------------------
* Preloader 
------------------------------------------------*/
$(window).on('load', function() {
    $('#loading').fadeOut();
    $('#preloader').delay(300).fadeOut('slow');

    /*------------------------------------------------
* baguetteBoxOne map 
------------------------------------------------*/
if (typeof oldIE === 'undefined' && Object.keys) {
    hljs.initHighlighting();
}

baguetteBox.run('.baguetteBoxOne');
baguetteBox.run('.baguetteBoxTwo');
baguetteBox.run('.baguetteBoxThree', {
    animation: 'fadeIn',
    noScrollbars: true
});
baguetteBox.run('.baguetteBoxFour', {
    buttons: false
});
baguetteBox.run('.baguetteBoxFive', {
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});

/*------------------------------------------------
* Load Functions
------------------------------------------------*/
OwlCarousel();
Affix();
Counter();
});

/*------------------------------------------------
* owlCarousel 
------------------------------------------------*/
var OwlCarousel = function() {
    $('#owl-demo').owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
};

/*------------------------------------------------
* page scroll 
------------------------------------------------*/
$('a.page-scroll').on('click', function(event) {
    var $anchor = $(this);

    $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 50
}, 1500, 'easeInOutExpo');

event.preventDefault();
});

$(window).scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
});

/*------------------------------------------------
* Affix 
------------------------------------------------*/
var Affix = function() {
    // offset for main navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
};

/*------------------------------------------------
* Counter
------------------------------------------------*/
var Counter = function() {
    $('.timer').countTo();
};

// Initialize WOW.js Scrolling Animations
    new WOW().init();
/*------------------------------------------------
* map scroll off 
------------------------------------------------*/
$('.maps').on('click', function() {
    $('.maps iframe').css('pointer-events', 'auto');
});

$(".maps").on('mouseleave', function() {
    $('.maps iframe').css('pointer-events', 'none');
});

}(jQuery, window, document));
