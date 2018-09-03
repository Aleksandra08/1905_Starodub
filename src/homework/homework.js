import './homework.scss';

$(document).ready(function () {
    $("#header_fix").removeClass('default');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $("#header_fix").addClass('default').fadeIn('fast');
        } else {
            $("#header_fix").removeClass('default').fadeIn('fast');
        };
    });
});


menu.onclick = function openMenu() {
    let x = document.querySelector('#myTopnav');

    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
};


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


$(document).ready(function(){

    $("#menu_link").on("click",".topnav__link", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        let id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $("body,html").animate({scrollTop: top}, 1500);
    });
});


