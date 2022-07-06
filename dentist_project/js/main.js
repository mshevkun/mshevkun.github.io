document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector('.btn');
  var menu = document.querySelector('.full-menu');
  var navItems = document.querySelectorAll('.nav__item');

  burger.addEventListener('click', function () {
    burger.classList.toggle('btn--open');
    menu.classList.toggle('menu--open');
  });

  navItems.forEach(el => {
    el.onmouseover = function () {
      burger.classList.toggle('btn--open');
      menu.classList.toggle('menu--open');
    };
  });



  // Change classes in contact-form section for max-width: 768px

  const mql = window.matchMedia('(max-width: 768px)');
  const contactForm = document.querySelector('.contact-form')
  const contactFormWrapper = document.querySelector('.contact-form-content-wrapper')

  function contactFormClassesChange(e) {
    if (e.matches) {
      if (contactForm.classList.contains('container-fluid')) {
        contactForm.classList.remove('container-fluid')
        contactForm.classList.add('container')
      }

      if (contactFormWrapper.classList.contains('row')) {
        contactFormWrapper.classList.remove('row')
        contactFormWrapper.classList.remove('d-flex')
      }
    } else {
      if (contactForm.classList.contains('container')) {
        contactForm.classList.remove('container')
        contactForm.classList.add('container-fluid')
      }

      if (!contactFormWrapper.classList.contains('row')) {
        contactFormWrapper.classList.add('row')
        contactFormWrapper.classList.add('d-flex')
      }
    }
  }

  mql.onchange = (e) => {
    contactFormClassesChange(e)
  };

  contactFormClassesChange(mql)
});


/* lazyload */

!function(window){
  var $q = function(q, res){
        if (document.querySelectorAll) {
          res = document.querySelectorAll(q);
        } else {
          var d=document
            , a=d.styleSheets[0] || d.createStyleSheet();
          a.addRule(q,'f:b');
          for(var l=d.all,b=0,c=[],f=l.length;b<f;b++)
            l[b].currentStyle.f && c.push(l[b]);

          a.removeRule(0);
          res = c;
        }
        return res;
      }
    , addEventListener = function(evt, fn){
        window.addEventListener
          ? this.addEventListener(evt, fn, false)
          : (window.attachEvent)
            ? this.attachEvent('on' + evt, fn)
            : this['on' + evt] = fn;
      }
    , _has = function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
    ;

  function loadImage (el, fn) {
    var img = new Image()
      , src = el.getAttribute('src');
    img.onload = function() {
      if (!! el.parent)
        el.parent.replaceChild(img, el)
      else
        el.src = src;

      fn? fn() : null;
    }
    img.src = src;
  }

  function elementInViewport(el) {
    var rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  }

    var images = new Array()
      , query = $q('img.lazy')
      , processScroll = function(){
          for (var i = 0; i < images.length; i++) {
            if (elementInViewport(images[i])) {
              loadImage(images[i], function () {
                images.splice(i, i);
              });
            }
          };
        }
      ;
    // Array.prototype.slice.call is not callable under our lovely IE8 
    for (var i = 0; i < query.length; i++) {
      images.push(query[i]);
    };

    processScroll();
    addEventListener('scroll',processScroll);

}(this);