import './homework.scss';
import './selectMenu/select.scss';

//FIXED HEADER

$(document).ready(function () {
    $("#header_fix").removeClass('default');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("#header_fix").addClass('default').fadeIn('fast');
        } else {
            $("#header_fix").removeClass('default').fadeIn('fast');
        }
    });
});


//HEADER MENU BUTTON

menu.onclick = function openMenu() {
    let x = document.querySelector('#myTopnav');

    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
};


// TRANSITION OF HEADER

$(document).ready(function () {

    $("#menu_link").on("click", ".topnav__link", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $("body,html").animate({scrollTop: top}, 1500);
    });
});


//BUTTON IN THE MAIN BLOCK

$(document).ready(function () {
    $(".about-astronomy__content").hide();

    $(".about-astronomy__btn").on("click", function (e) {

        let $this = $(this).prev('.about-astronomy__content');
        let $text = $(this);
        $this.slideToggle('slow', function () {
            if ($(this).is(':visible')) {
                $text.text('LESS INFO');
            } else {
                $text.text('LEARN MORE');
            }
        });

    });
});


//FOOTER MENU LANGUAGE

import {Select} from './selectMenu/select.js';

const language = ['English', 'Ukrainian', 'Russian'];
const languagesList = new Select(document.querySelector('#languagesList'), language);

// //SLIDER  let btnLeft = document.querySelector('#gallery .companies-employees__btn .company-employees__slider_nav_left');
//
// let btnLeft = document.querySelector('#gallery .buttons .prev');
// let btnRight = document.querySelector('#gallery .buttons .next');
//
// let images = document.querySelectorAll('#gallery .photos img');
// let i = 0;
//
// btnLeft.onclick = function () {
//     images[i].className = '';
//     i = i--;
//     if (i < 0) {
//         i = images.length - 1;
//     }
//     images[i].className = 'showed';
// };
//
//
// btnRight.onclick = function () {
//     images[i].className = '';
//     i = i++;
//     if (i >= images.length) {
//         i = 0;
//     }
//     images[i].className = 'showed';
// };
