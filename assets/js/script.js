$(document).ready(function () {
    // Handler for .ready() called.
    // slider
    $(".featured-items-product-img-slider").slick({
        dots: false,
        fade: false,
        // prevArrow: $('.action-slider--left'),
        // nextArrow: $('.action-slider--right'),
        prevArrow: '<ion-icon name="chevron-back-outline" class="action-slider--left"></ion-icon>',
        nextArrow: '<ion-icon name="chevron-forward-outline" class="action-slider--right"></ion-icon>',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    arrows: false,
                },
            },
        ],
    });
    // customer slider click
    
});
