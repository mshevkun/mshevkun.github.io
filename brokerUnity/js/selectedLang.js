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
