import './homework.scss';

menu.onclick = function openMenu() {
    let x = document.querySelector('#myTopnav');

    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
};

$(document).ready(function () {
    $(".about__astronomy__content").hide();

    $(".about__astronomy__btn").on("click", function (e) {

        let $this = $(this).prev('.about__astronomy__content');
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

