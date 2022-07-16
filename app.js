"use strict";
$(document).ready(function () {


    $('.btn').click(function (e) {
        e.preventDefault();
        if ($.trim($('input').val()) == '') {
            $('input').val();
        } else {
            let n = c => {
                for (let i=0; i<c; i++) { $('.minibox').append(`<h3>${a}</h3>`) };
            }
            let m = e => Number(e) ? n(e) : $('.minibox').append(`<h1>${e}</h3>`);
            m($.trim($('input').val()));
        }
        $('input').val('') 
    });


});