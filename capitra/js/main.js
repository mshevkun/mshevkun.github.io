
<!-- accordeon  -->

let selectedElem = null;

$('.accordion').find('.accordion-toggle').click(function() {
    if (selectedElem != this && selectedElem){
        selectedElem.classList.remove('active')
        selectedElem = this;
    }
    else{
        selectedElem = this;
    }
    $(this).next().slideToggle('600');
    $(".accordion-content").not($(this).next()).slideUp('600');
});

$('.accordion-toggle').on('click', function() {
    $(this).toggleClass('active').siblings().removeClass('active');
});



$('.accordion-header').find('.accordion-header-toggle').click(function() {
    $(this).next().slideToggle('600');
    $(this).toggleClass('active');
});
$('.accordion-header-toggle').on('click', function() {
    $(this).toggleClass('active');
});



<!-- end accordeon -->



<!-- nav-burger -->

(function(){
    let burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header'),
        body = document.querySelector("body"),
        burgerButtonClose = document.querySelector(".innerBurger-close")

    burger.onclick = function() {
        $(".main-logo-burger").toggle();
        $(".main-logo").toggle();
        $(".innerBurger").toggle();
        $(".burger-img").toggleClass('active')
        burgerButtonClose.classList.toggle("activeBurger");
        header.classList.toggle('menu-opened');
        body.classList.toggle('scroll-hidden');
    }

    $(".menu-item").click( function () {
        $(".main-logo-burger").toggle();
        $(".main-logo").toggle();
        body.classList.toggle('scroll-hidden');
        $(".innerBurger").toggle();
        header.classList.toggle('menu-opened');
        burgerButtonClose.classList.toggle("activeBurger");
    });
}());

<!-- end nav-burger -->

$(document).ready(function(){
    $(".nav").on("click",".scroll", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

const email = document.querySelector('#email');

email.addEventListener("blur", (event) => {
    let valueInput = email.value;
    if (valueInput.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi)) {
        alert("lol!!")
    }
})

//carousel

jQuery(function($){$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})});

//end-carousel
