// jQuery document ready
$(document).ready(function () {


    let scrollBtn = $('.btn-scroll');


    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {

            scrollBtn.fadeIn(500)

        } else {

            scrollBtn.fadeOut(500)
        }

    })

    scrollBtn.click(function () {
        $('html').animate({

            scrollTop: 0

        }, 1000)
    })





});