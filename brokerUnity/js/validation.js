$(function() {
    $(".btn-submit").on("click", validate);
    $(".email-input").focusout(validate);

    // Validate email
    function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }

    // send form
    function sendForm() {
        $(".email-input").css('color','#13E800');
        $(".error-email").html('<img src="img/accept.png">').fadeIn();
    }

    // validate email and send form after success validation
    function validate() {
        var email = $(".email-input").val();
        var $error = $(".error-email");
        $error.text("");

        if (validateEmail(email)) {
            $error.fadeOut();
            sendForm();
        } else {
            $error.fadeIn();
            $error.text("Incorrect email");
            $(".email-input").css('color','#FF1D1D');
            $('.btn-submit').preventDefault()
        }
        return false;
    }
});