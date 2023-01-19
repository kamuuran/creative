"use strict"

$(window).on("load", function() {
    // Animation using ScrollReveal
    // Selecting objects to be animated
    var animatedList1 = '.extra-lg-text, .extra-lg-text span, .lg-text, .lg-text span, .boxy .title, .post-box .title, .post-header .title, .boxy .slg-text';

    var animatedList2 = '.boxy .text li, .boxy .bottom-text .link, .boxy .bottom-text .text';

    var animatedList3 = '.normal-text p, .normal-lg-text p, .clients-logos .logo-holder, .text-box .title, .text-box p, .team-photos, .post-box, .post-header, .post-content';

    var animatedList4 = '.clients-logos .logo-holder, .cr-btn, .footer .contact-info-holder, .few-contact .contact-info-holder, .job-box .title, .job-box .subtitle, .people-box .title, .people-box .subtitle, .post-box .text, .post-header .text, .post-content h1, .post-content p, .social-row .social-link-holder, .project-info h2, .project-imgs .img-holder';

    // Every list will have different animation
    ScrollReveal().reveal(animatedList1,{ duration: 800, distance: '50px', interval: 100});
    ScrollReveal().reveal(animatedList2,{ duration: 800, scale: 0.8, distance: '50px', interval: 50 });
    ScrollReveal().reveal(animatedList3,{ duration: 1000, interval: 100 });
    ScrollReveal().reveal(animatedList4,{ duration: 800, interval: 50 });
    
    // Selecting object to apply classes while scrolling
    var menuToggle = $('.menu-toggle');
    var socialMedia = $('.social-media', '.cnav');
    var mouseScroll = $('.mouse-scroll', '.header');
    var header = $('.header');
    var cnav = $('.cnav');
    
    // Make the height of the top content like the window height
    if ($(window).width() > 768){
        header.css('height',$(window).height());
        $('.info-content').css('width',header.outerHeight());
    }else{
        header.css('height','inherit');
        $('.info-content').css('width',header.outerHeight());
    }
    $(window).on('resize',function(e){
        if ($(window).width() > 768){
            header.css('height',$(window).height());
            $('.info-content').css('width',header.outerHeight());
        }else{
            header.css('height','inherit');
            $('.info-content').css('width',header.outerHeight());
        }
    });
    // After the page loaded check if the window scroll is over 180px and add 'hide' class
    if(window.scrollY>180){
        socialMedia.addClass('hide');
    }else{
        socialMedia.removeClass('hide');
    }

    // After the page loaded check if the window scroll is over 50px and add 'hide' class
    if(window.scrollY>50){
        mouseScroll.addClass('hide');
    }

    // After the page loaded check if the window scroll is over the 'header' height and add 'blend' class
    if(window.scrollY>(header.outerHeight()-cnav.outerHeight())){
        cnav.addClass('blend');
        menuToggle.addClass('sm');
    }else{
        cnav.removeClass('blend');
        menuToggle.removeClass('sm');
    }

    // Check and add classes while scrolling for the same last three object
    $(window).on("scroll", function(){
        if(window.scrollY>180){
            socialMedia.addClass('hide');
        }else{
            socialMedia.removeClass('hide');
        }
        if(window.scrollY>50){
            mouseScroll.addClass('hide');
        }
        if(window.scrollY>(header.outerHeight()-cnav.outerHeight())){
            cnav.addClass('blend');
            menuToggle.addClass('sm');
        }else{
            cnav.removeClass('blend');
            menuToggle.removeClass('sm');
        }
    });

    // Menu Toggle and animate the link using AnimeJS
    menuToggle.on('click',function(e){
        $('body').toggleClass('menu-open');
        $('.main-menu').toggleClass('opened');
        $(this).toggleClass('open');
        if($(this).hasClass('open')){
            anime({
                targets: '.main-menu .menu-links ul li a',
                translateY: ['470px', '0'],
                rotate: ['20deg', '0deg'],
                easing: 'cubicBezier(1.000, -0.020, 0.250, 0.750)',
                duration: 300,
                delay: anime.stagger(50)
            });
        }
    });
    // Hide the menu after link clicked
    $('.main-menu .menu-links ul li a').on('click', function(e){
        $('body').toggleClass('menu-open');
        $('.main-menu').toggleClass('opened');
        menuToggle.toggleClass('open');
    });

    // Animate the team photos using AnimeJS
    var photosList = $('.team-photos-holder .photo-holder', '.team-photos');
    photosList.clone().appendTo('.team-photos .team-photos-holder');

    var itemNum = $('.team-photos-holder .photo-holder').length;
    var teamPhotosWidth = $('.team-photos-holder .photo-holder').outerWidth(true) * itemNum;

    anime({
        targets: '.team-photos-holder',
        translateX: ['0', '-'+(teamPhotosWidth/2)-18+'px'],
        duration: 50000,
        easing: 'linear',
        loop: true
    });
});