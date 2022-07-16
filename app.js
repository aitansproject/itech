"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) {
        e.preventDefault();
        let func = a => {
            if (Number(a)) {
                for (let i = 1; i <= a; i++) {
                    $('.minibox').append(`<h1>${a}</h1>`)
                }
            } else if (String(a)) {
                $('.minibox').append(`<h1>${a}</h1>`)
            } else if ($('input').val('')) {
                $('.minibox').append("")
            }
            $('input').val('');
        }
        func($('input').val());

    }); 

});