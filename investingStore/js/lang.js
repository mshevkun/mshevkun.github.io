var arrLang = {

    'en' : {
        'howTo': 'How it works',
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

    'pl': {
        'howTo': 'How it worksPL',
        'about': 'About UsPL',
        'instructions' : 'InstructionsPL',
        'news' : "NewsPL",
        'platforms' : 'PlatformsPL',
        'faq' : 'FAQPL',
        'contact': 'Contact UsPL',
        'languages': 'LanguagesPL',
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
        'howTo': 'FAQ',
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
    },

    'du': {
        'howTo': 'How it worksDU',
        'about': 'duAbout Us',
        'instructions' : 'duInstructions',
        'news' : "duNews",
        'platforms' : 'duPlatforms',
        'faq' : 'duFAQ',
        'contact': 'duContact Us',
        'homeMobile': 'Home',
        'aboutMobile': 'About Us',
        'instructionsMobile' : 'Instructions',
        'newsMobile' : "News",
        'platformsMobile' : 'Platforms',
        'faqMobile' : 'FAQ',
        'contactMobile': 'Contact Us',
        'languagesMobile': 'Languages',
    },
};

// Process translation

jQuery(document).ready(function($){
    $(function() {
        $('.translate').click(function() {
            var lang = $(this).attr('id');
            $('.currentLang').html(lang);
            localStorage.setItem('selectedLanguage', lang);


            $('.lang').each(function(index, item) {
                $(this).text(arrLang[lang][$(this).attr('key')] ) ;
            });
        });
    });



    let selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang) {
        $('.currentLang').html(selectedLang);
        $('.lang').each(function(index, item) {
            $(this).text(arrLang[selectedLang][$(this).attr('key')] );
        });
    }
});

