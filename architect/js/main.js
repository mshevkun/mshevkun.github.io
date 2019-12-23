$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$( ".hide_show_menu_button" ).click(function(){
    $( ".header-block" ).slideToggle();
});

let $win = $(window);
let $fixed = $(".fixed");
let limit = 900;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}

$win.on("scroll", function () {
    let top = $win.scrollTop();

    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

$fixed.click(function() {
    $('html, body').animate({scrollTop: 0},1500);
    return false;
});