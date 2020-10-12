const input = $('#email');
const submit = $('.submit');
const errorText = $('#error');
const popupText = $('#popup');

$("input[type='email']").bind('focus', function() {
    $(this).css('background-color', 'transparent');
});

function getValueInput() {
    var inputText = input.val();
    return inputText;
}

function showError() {
    submit.addClass('error');
    errorText.addClass('error');
}

function hideError() {
    submit.removeClass('error');
    errorText.removeClass('error');
}

input.keydown(function(e) {
    var keyCode = e.keyCode;
    if(keyCode === 13) {
        e.preventDefault();
        var value = getValueInput();
        if (value.length === 0 || value.indexOf('@') === -1) {
            showError();
        } else {
            hideError();
            input.val('');
            input.blur();
            popupText.addClass('show');
            setTimeout(function(){
                popupText.removeClass('show');
            },4000);
        }
    }
})


popupText.on({
    'click' : function(){
        popupText.removeClass('show');
    },
})


submit.click(function(e){
    var value = getValueInput();
    if (value.length === 0 || value.indexOf('@') === -1) {
        showError(); 
    } else {
        hideError();
        input.val('');
        input.blur();
        popupText.addClass('show');
        setTimeout(function(){
            popupText.removeClass('show');
        },4000);
    }
    e.preventDefault();
})