$(function () {
    $('.scroll-page').on('click', function () {
        var offset = 0;
        var speed = 800;
        var target = $(this.hash);

        $('nav .menu a').each(function () {
            $(this).removeClass('active');
        });

        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, speed, 'swing');
    });

});

$(window).scroll(function (event) {
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);
    $('nav .menu a').each(function () {
        var curLink = $(this);
        var refElement = $(curLink.attr('href'));

        if (refElement.position().top <= scrollPos + 60) {
            $('nav .menu a').removeClass('active');
            curLink.addClass('active');

        } else {
            curLink.removeClass('active');
        }
    });
});

var menulist = document.getElementById("menulist");
menulist.style.maxHeight = "0px";
function togglemenu(){
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "130px";
    }
    else {
        menulist.style.maxHeight = "0px";
    }
};