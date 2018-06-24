import '../styles/lighter.scss';

export function lighter() {
    console.log('LIGHTER INIT!');
    const lighterRed = document.querySelector('.street-lighter__light_red');
    const lighterYellow = document.querySelector('.street-lighter__light_yellow');
    const lighterGreen = document.querySelector('.street-lighter__light_green');
    console.log(lighterRed, lighterYellow, lighterGreen);

    function switchOff() {
        lighterRed.classList.remove('street-lighter__light_active');
        lighterYellow.classList.remove('street-lighter__light_active');
        lighterGreen.classList.remove('street-lighter__light_active');
        console.log('SWITCHED');
    }

    function switchOn(element) {
        console.log('ENABLED');
        element.classList.add('street-lighter__light_active');
    }


    function clickHandler(element) {
        switchOff();
        switchOn(element);
    }

    lighterRed.addEventListener('click', function () {
        clickHandler(lighterRed)
    });
    lighterYellow.addEventListener('click', function () {
        clickHandler(lighterYellow)
    });
    lighterGreen.addEventListener('click', function () {
        clickHandler(lighterGreen);
    });
}
