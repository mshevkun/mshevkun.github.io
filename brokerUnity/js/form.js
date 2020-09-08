const PATTERN = {
    'phone': /[0-9]{6,15}$/,
    'email': /[A-Za-z0-9._%+-]+@[A-Za-z0-9\-.]+\.[A-Za-z]{2,4}$/,
    'name': /^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.]{3,30}$/,
    'last_name': /^[^\d+=()[\]{}\\/^$|?*!@#%:;&,_.]{3,30}$/,
    'promo': /[0-9]{3,3}$/
}

class Validate {
    static input(pattern, selector) {
        let val = selector.value
        let cls = selector.classList


        if (val.length > 0) {
            if (!(val.search(pattern) === 0) && val.length > 0 || val.replace(/\s/g, '') === '') {
                cls.remove('valid')
                cls.add('error')
                return false
            }

            cls.remove('error')
            cls.add('valid')
            return true
        } else {
            cls.remove('error', 'valid')
            return false
        }
    }
}

let inputForCheck = $('.input')
let form = $('.form')
let promo = $('input[name=promo]')
let select = $('.select')

$(document).ready(function() {
    if (select.length > 0) {
        select.map(function() {
            countryList($(this), {
                select: true,
                flagInSelect: true
            })
        })
    }
})

inputForCheck.map(function() {
    if (this.value.length > 0) {
        Validate.input(PATTERN[this.name], this)
    }
})

inputForCheck.on('change', function() {
    Validate.input(PATTERN[this.name], this)
})

promo.on('change', function() {
    Validate.input(PATTERN[this.name], this)
})

form.on('submit', function(event) {
    event.preventDefault()

    let that = $(this)
    let data = that.serializeArray()
    let url = 'https://crm.investingcapital.com/api/v2/lead'
    let btn = that.find('button')
    let curTextBtn = btn.text()
    let errorMessage = that.find('p.error')
    let input = that.find('.input')
    let promoInput = that.find('input[name=promo]')
    let country = that.find('input[name=country]')
    let checkInp = that.find('input[name="check"]')
    let valid = true

    let correctData = {}
    data.map(function(param) {
        correctData[param['name']] = param['value']
    })
    let crmData = {
        'first_name': correctData['name'],
        'last_name': correctData['last_name'],
        'phone_number': correctData['phone'],
        'email': correctData['email'],
        'country': correctData['country'],
        'promo_code': correctData['promo'],
        'language': 'English',
        'address': '',
    }

    if (!checkInp.prop('checked')) {
        checkInp.addClass('error')
        valid = false
    } else {
        checkInp.removeClass('error')
    }

    input.map(function() {
        let prop = Validate.input(PATTERN[this.name], this)
        if (!prop) {
            valid = false
        }
    })

    if (promoInput.val() !== undefined && promoInput.val().length > 0) {
        let prop = Validate.input(PATTERN[promoInput[0].name], promoInput[0])
        if (!prop) {
            valid = false
        }
    }

    if (country.val() !== undefined && country.val().length > 0) {
        country.prevAll('.select').removeClass('error').addClass('valid')
    } else {
        country.prevAll('.select').addClass('error').removeClass('valid')
        valid = false
    }

    if (valid) {
        btn.text('Wait').attr('disabled', 'disabled')
        errorMessage.text('')

        $.ajax({
            method: 'POST',
            url: url,
            data: crmData,
            dataType: 'json',
            success: function(request) {
                if (request['autoLoginLink']) {
                    location.assign(request['autoLoginLink'])
                } else {
                    errorMessage.text(request['message'])
                }
                btn.text(curTextBtn).removeAttr('disabled', 'disabled')
            },
            error: function(error) {
                errorMessage.text(errorMessage.data('err'))
                btn.text(curTextBtn).removeAttr('disabled', 'disabled')
            }
        })
    } else {
        errorMessage.text(errorMessage.data('field'))
        btn.text(curTextBtn).removeAttr('disabled', 'disabled')
    }
})