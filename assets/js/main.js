/*
-------------------------------------------------------------------------------------------
* Template Name    : MedApp - Bootstrap 4 HTML5  Multi Purpose One/Multi Pages Template   *
* Author           : ParExcellence                                                        *
* Version          : 1.0.0                                                                *
* File Description : Main Js file of the template                                         *
*------------------------------------------------------------------------------------------
*/
$(document).ready(function () {
    "use strict";

    $("#submit_q").click(function () {

        var firstnameObj = $("#firstname");
        var lastnameObj = $("#lastname");
        var emailObj = $("#email");
        var phoneObj = $("#phone");
        var commentsObj = $("#comments");
        var firstname = firstnameObj.val();
        var lastname = lastnameObj.val();
        var email = emailObj.val();
        var phone = phoneObj.val();
        var comments = commentsObj.val();
        firstnameObj.removeClass('redBorder');
        lastnameObj.removeClass('redBorder');
        emailObj.removeClass('redBorder');
        phoneObj.removeClass('redBorder');
        commentsObj.removeClass('redBorder');


        var isValid = true;
        if (firstname == '') {
            firstnameObj.focus();
            firstnameObj.addClass('redBorder');
            isValid = false;
        }
        if (lastname == '') {
            lastnameObj.focus();
            lastnameObj.addClass('redBorder');
            isValid = false;
        }
        if (email == '') {
            emailObj.focus();
            emailObj.addClass('redBorder');
            isValid = false;

        }
        if (phone == '') {
            phoneObj.focus();
            phoneObj.addClass('redBorder');
            isValid = false;
        }

        if (comments == '') {
            commentsObj.focus();
            commentsObj.addClass('redBorder');
            isValid = false;
        }
        if (isValid) {

            $('#status_br').removeClass('success');
            $('#status_br').removeClass('error');

            var url = 'https://api.healthez.care/lead_post.php';
            // Send the data using post
            var posting = $.post(url, { 'firstname': firstname, 'lastname': lastname, 'email': email, 'phone': phone, 'comments': comments });

            // Put the results in a div
            posting.done(function (data) {
                var d = JSON.parse(data);
                if (d.status == 'ok') {
                    firstnameObj.val(''); lastnameObj.val(''); commentsObj.val(''); emailObj.val(''); phoneObj.val('');
                    $('#status_br').addClass('success');
                    $('#status_br').html('Demo request have been sent successfully. HealthEz team will call you shortly.');
                } else {

                    $('#status_br').addClass('error');
                    $('#status_br').html(d.message);

                }
            });


        } else {

            $('#status_br').addClass('error')
            $('#status_br').html('Please enter all required fields.');
        }


    });


    /*----MAIN SLIDER-----*/
    (function ($) {
        var MainSilderCarousel = $('.main-slider');
        if (MainSilderCarousel.length > 0) {
            MainSilderCarousel.owlCarousel({
                merge: true,
                loop: false,
                nav: false,
                center: false,
                dots: true,
                animateIn: 'fadeIn',
                autoplay: true,
                autoplayTimeout: 5000,
                margin: 0,
                items: 1,
            });
        }
    })(jQuery);
    /*----SHOWCASE SLIDER-----*/
    (function ($) {
        var showcaseCarousel = $('.showcase-slider');
        if (showcaseCarousel.length > 0) {
            showcaseCarousel.owlCarousel({
                center: true,
                items: 5,
                dots: true,
                nav: false,
                loop: true,
                margin: 0,
                responsive: {
                    0: {
                        items: 2
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 4
                    }
                }
            });
        }
    })(jQuery);

    /*----TESTIMONIAL SLIDER-----*/
    (function ($) {
        var testimonialCarousel = $('.testimonial-slider');
        if (testimonialCarousel.length > 0) {
            testimonialCarousel.owlCarousel({
                margin: 16,
                loop: true,
                nav: false,
                center: false,
                dots: true,
                autoplay: true,
                autoplayTimeout: 5000,
                items: 3,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false,
                        dots: true
                    },
                    600: {
                        items: 2,
                        nav: false,
                        dots: true
                    },
                    1000: {
                        items: 3,
                        nav: false,
                        dots: true
                    }
                }
            });
        }
    })(jQuery);

    /*----CLIENTS SLIDER-----*/
    (function ($) {
        var testimonialCarousel = $('.clients-slider');
        if (testimonialCarousel.length > 0) {
            testimonialCarousel.owlCarousel({
                margin: 16,
                loop: true,
                nav: true,
                center: false,
                dots: false,
                autoplay: false,
                autoplayTimeout: 5000,
                items: 2,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true,
                        dots: false
                    },
                    600: {
                        items: 2,
                        nav: true,
                        dots: false
                    },
                    1000: {
                        items: 2,
                        nav: true,
                        dots: false
                    }
                }
            });
        }
    })(jQuery);
    /*----MAGIC POPUP-----*/
    if (('.filters-content').length > 0) {
        $('.filters-content').each(function () {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
    }
    /*----ISOTOP JS-----*/
    var length = $('.portfolio-section').length;
    if (length >= 1) {
        $('.filters ul li').click(function () {
            $('.filters ul li').removeClass('active');
            $(this).addClass('active');

            var data = $(this).attr('data-filter');
            $grid.isotope({
                filter: data
            })
        });

        var $grid = $(".grid").isotope({
            itemSelector: ".all",
            percentPosition: true,
            masonry: {
                columnWidth: ".all"
            }
        });
    }
    /*----ACCORDIAN JS-----*/
    (function ($) {
        $(".question-card").click(function () {
            if ($(this).hasClass('active')) {
                $('.question-card').removeClass('active');
                $(this).removeClass('active')
            } else {
                $('.question-card').removeClass('active');
                $(this).addClass('active')
            }
        });
    })(jQuery);

    /*---- MOBILE FOOTER TOGGLE -----*/
    (function ($) {
        var contentwidth = jQuery(window).width();
        if ((contentwidth) < '575') {
            jQuery('.footer-title').append('<span class="mdi mdi-arrow-down-drop-circle"></span>');
            jQuery('.footer-title').click(function () {
                jQuery('.footer-title').removeClass('active');
                jQuery('.footer_menu_list').slideUp('normal');
                if (jQuery(this).next().is(':hidden') == true) {
                    jQuery(this).addClass('active');
                    jQuery(this).next().slideDown('normal');
                }
            });
            jQuery('.footer-content').hide();
        } else {
            jQuery('.footer-content').show();
        }
    })(jQuery);
});

/*----WOW ANIMATION-----*/
(function ($) {
    var length = $('.wow').length;
    if (length >= 1) {
        wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
        });
        wow.init();
    }
})(jQuery);

/*----ONSCROLL JS-----*/
$(window).on("scroll", function () {
    "use strict";
    var sections = $('section'),
        nav = $('.navbar-nav'),
        nav_height = nav.outerHeight() + 25;
    $(window).scrollTop() >= 20 ? $("nav").addClass("sticky-header") : $(".sticky").removeClass("sticky-header");
    /*----ON SCROLL CHANGE ACTIVE MENU-----*/
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('li').removeClass('active');
            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
        }
    });
}), $(".onepage-links .nav-item a").on("click", function (o) {
    var t = $(this);
    $('.nav-item').removeClass('active');
    $(t).parent().addClass('active');
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - 50
    }, 1500, "easeInOutExpo"), o.preventDefault()
}), $(document).on("click", ".navbar-collapse.show", function (o) {
    $(o.target).is("a") && $(this).collapse("hide")
}), $(window).on("scroll", function () {
    $(this).scrollTop() > 100 ? $(".back_top").fadeIn() : $(".back_top").fadeOut()
}), $(".back_top").on("click", function () {
    return $("html, body").animate({
        scrollTop: 0
    }, 1e3), !1
});

/*----OTHER LINK JS-----*/
(function ($) {
    "use strict";
    $(".onepage-links .contact_btn a").on("click", function (event) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top - 50
        }, 2000, "easeInOutExpo"), event.preventDefault()
    })
})(jQuery);

/*----PARTICLES-JS-----*/
(function ($) {
    "use strict";
    var length = $('.particles-js').length;
    var length01 = $('.particles-js').length;
    if (length >= 1 && length01 >= 1) {
        var ViewportWidth = jQuery(window).width();
        if ((ViewportWidth) > '992') {
            particlesJS.load('particles-js', 'particles.json', function () { });
            particlesJS.load('particles-js1', 'particles.json', function () { });
        }
    }
})(jQuery);