'use strict';

function splashReady() {
    $('#mc-form').ajaxChimp({
        url: 'http://loopfirst.us8.list-manage.com/subscribe/post?u=05bcd9785a35a2e97b6ffb520&amp;id=3133bd4d5d'
    });

    $('#signup').click(function() {
        $('.wrap').addClass('slide');

        setTimeout(function() {
            $('#mc-email').focus();
            $('#mc-email').prompt();
        }, 500);
    });
}


function splashLoad() {
    $('body').addClass('loaded');
}


$(document).ready(splashReady);
$(window).load(splashLoad);
