var arrLang = {
  'en': {
    'about': 'About Us',
    'instructions' : 'Instructions',
    'news' : "News",
    'platforms' : 'Platforms',
    'faq' : 'FAQ',
    'contact': 'Contact Us',
    'languages': 'Languages',
    'en':'English',
    'ru': 'Russian',
    'homeMobile': 'Home',
    'aboutMobile': 'About Us',
    'instructionsMobile' : 'Instructions',
    'newsMobile' : "News",
    'platformsMobile' : 'Platforms',
    'faqMobile' : 'FAQ',
    'contactMobile': 'Contact Us',
    'languagesMobile': 'Languages',
    },





  'ru': {
    'about': 'О нас',
    'instructions' : 'Инструкции',
    'news' : "Новости",
    'platforms' : 'Платформы',
    'faq' : 'FAQ',
    'contact': 'Контакты',
    'languages': 'Языки',
    'en':'Английский',
    'ru': 'Русский',
    'homeMobile': 'Главная',
    'aboutMobile': 'О нас',
    'instructionsMobile' : 'Инструкции',
    'newsMobile' : "Новости",
    'platformsMobile' : 'Платформы',
    'faqMobile' : 'FAQ',
    'contactMobile': 'Контакты',
    'languagesMobile': 'Языки',
  }
};

// Process translation

jQuery(document).ready(function($){
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            localStorage.setItem('selectedLanguage', lang);


            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')] ) ;
            });
        });
    });


    $(function() {
        $(".ruLang").on("click", function () {
            $(".ruLang").hide();
            $(".engLang").show();
        })

        $(".engLang").on("click", function () {
            $(".engLang").hide();
            $(".ruLang").show();
        })
    });

    let selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang) {
        if (selectedLang == "ru") {
            $(".ruLang").hide();
            $(".engLang").show();
        } else {
            $(".ruLang").show();
            $(".engLang").hide();
        }
        $('.lang').each(function(index, item) {
            $(this).text(arrLang[selectedLang][$(this).attr('key')] );
        });
    }
});

