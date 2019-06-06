// Show menu
jQuery(window).bind('scroll resize', function () {
    var currentSection = null;

    jQuery('.section').each(function () {
        var element = jQuery(this).attr('id');
        if (jQuery('#' + element).is('*')) {
            if (jQuery(window).scrollTop() >= jQuery('#' + element).offset().top - 90)
            {
                currentSection = element;
            }
        }
    });

// Add class active into #menu
    jQuery('#menu ul li').removeClass('active').find('a[href*="#' + currentSection + '"]').parent().addClass('active');
    jQuery('.menu-wrapper').removeClass(function (index, css) {
        return (css.match(/(^|\s)section-\S+/g) || []).join(' ');
    }).addClass('section-' + currentSection);
});

// Smooth menu
jQuery(document).ready(function () {
    
    jQuery('#menu ul li a, .slow-scroll').click(function () {
        if (jQuery('.menu-mobile').is(':visible'))
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 100}, 1500);
        } else
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 1500);
        }
        return false;
    });
     jQuery('#home a, .slow-scroll').click(function () {
        if (jQuery('.menu-mobile').is(':visible'))
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 100}, 1500);
        } else
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 1500);
        }
        return false;
    });
    jQuery(window).scrollTop(1);
    jQuery(window).scrollTop(0);
});

jQuery(document).resize(function () {

    jQuery('#menu ul li a, .slow-scroll').click(function () {
        if (jQuery('.menu-mobile').is(':visible'))
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top - 54}, 1500);
        } else
        {
            jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top}, 1500);
        }
        return false;
    });

});
/*
Cach 2:
 */
/*  jQuery(".section-title-holder").on("scroll", onScroll);
    
    //smoothscroll
   $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        jQuery(".section-title-holder").off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });


function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
*/