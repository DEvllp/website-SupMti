$(document).ready(function () {

    function animateOnScroll() {
        $('.animate-on-scroll').each(function () {
            let elementTop = $(this).offset().top;
            let elementBottom = elementTop + $(this).outerHeight();

            let viewportTop = $(window).scrollTop();
            let viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate');
            }
        });
    }

    $(window).on('scroll', animateOnScroll);
    animateOnScroll(); // déclenche au chargement
});
