$(document).ready(function() {
    // navbar active
    navbarActive();
    function navbarActive() {
        var scrollLink = $('.navbar ul li a[href*="#"]');
        var scrollLinkUx = $(".nav_ux");

        // smooth scrolling
        scrollLink.click(function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 30);
        });

        scrollLinkUx.click(function(e) {
            e.preventDefault();
            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 30);
        });

        // quitar el url #
        $('a[href*="#"]:not([href="#"])').on("click", function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top
                    }, 30);
                    return false;
                }
            }
        });
    }

    $(".hide_modal").on("click", function() {
        $("body").removeClass("page-category");
        $(".modal_cont").removeClass("modal_cont_animate");
    });

    $(".show_modal1").on("click", function() {
        $("body").addClass("page-category");
        $(".show_blog1").addClass("modal_cont_animate");
    });

    $(".show_modal2").on("click", function() {
        $("body").addClass("page-category");
        $(".show_blog2").addClass("modal_cont_animate");
    });

    $(".show_modal3").on("click", function() {
        $("body").addClass("page-category");
        $(".show_blog3").addClass("modal_cont_animate");
    });

    setTimeout(function() {
        $(".loader_bg").fadeToggle();
    }, 1760);
});