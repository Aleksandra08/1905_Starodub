import './startupSite.scss';


// HEADER MENU

const menu = document.querySelector('#menu');
const btn = document.querySelector('#button');
console.log(btn);
btn.addEventListener('click', () => {
    menu.classList.toggle('page-nav_expand')
});


//slider ABOUT

const btn_ptev = document.querySelector('#gallery .services-about__buttons .prev');
const btn_next = document.querySelector('#gallery .services-about__buttons .next');

let images = document.querySelectorAll('#gallery .services-about__photos img');
let i = 0;

btn_ptev.onclick = function () {
    images[i].className = '';
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showed';
};

btn_next.onclick = function () {
    images[i].className = '';
    i++;
    if (i >= images.length) {
        i = 0;
    }
    images[i].className = 'showed';
};


//slider SPONSORS

const btn_sponsr_ptev = document.querySelector('#sponsor-gallery .sponsor-slider__buttons .sponsor-slider__buttons_prev');
const btn__sponsor_next = document.querySelector('#sponsor-gallery .sponsor-slider__buttons .sponsor-slider__buttons_next');

let images_sponsor = document.querySelectorAll('#sponsor-gallery .sponsor-slider__photos img');
let y = 0;

btn_sponsr_ptev.onclick = function () {
    images_sponsor[y].className = '';
    y--;

    if (y < 0) {
        y = images_sponsor.length - 1;
    }

    images_sponsor[y].className = 'showed';
};

btn__sponsor_next.onclick = function () {
    images_sponsor[y].className = '';
    y++;
    if (y >= images_sponsor.length) {
        y = 0;
    }
    images_sponsor[y].className = 'showed';
};


// slider WORKS

$(function () {
    $('.works-content__menu button').click(function () {
        let get_id = this.id;
        let get_current = $('.works__posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });
    $('#all').click(function () {
        $('.post').show(500);
    });
});