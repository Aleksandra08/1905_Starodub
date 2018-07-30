import './lesson9.scss';

import {lighter} from './scripts/lighter';
// const  lighterElement = document.querySelector('#lighter1');
// const  lighterElement2 = document.querySelector('#lighter2');
// const  lighterElement3 = document.querySelector('#lighter3');
// lighter(lighterElement);
// lighter(lighterElement2);
// lighter(lighterElement3);
//
//
//
// function notificationBar() {
//
//     const notificationBarElement = document.querySelector('.notification-bar');
//     const control = document.querySelector('.notification-bar__btn');
//
//     console.log(control);
//     console.log(notificationBarElement);
//
//     function toggleMessage() {
//         notificationBarElement.classList.toggle('notification-bar_active');
//     }
//
//     control.addEventListener('click', toggleMessage);
// }
//
// notificationBar();
//
//
// function box() {
//     const boxElement1 = document.querySelector('.box__red');
//     console.log(boxElement1);
//     const boxElement2 = document.querySelector('.box__yellow');
//     console.log(boxElement2);
//     const boxElement3 = document.querySelector('.box__green');
//     console.log(boxElement3);
//
//
//     function toggleColor1() {
//         boxElement1.classList.toggle('box__red_active');
//
//     }
//
//     boxElement1.addEventListener('click', toggleColor1);
//
//
//     function toggleColor2() {
//         boxElement2.classList.toggle('box__yellow_active');
//     }
//
//     boxElement2.addEventListener('click', toggleColor2);
//
//     function toggleColor3() {
//
//         boxElement3.classList.toggle('box__green_active');
//     }
//
//     boxElement3.addEventListener('click', toggleColor3);
//
// }
//
// box();


const products = [
    {
        title: 'Test',
        price: '2500'
    },
    {
        title: 'Test',
        price: '2500'
    },
    {
        title: 'Test',
        price: '2500'
    },

];

function calcTotal(arrayOffNumbers) {
    let total = 0;
    for (let i = 0; i < arrayOffNumbers.length; i++) {

        const number = Number(arrayOffNumbers[i].price);
        if (isNaN(number) === false) {
            total += number;
        }
    }
    return (total);

}

const totalPrice = calcTotal(products);
console.log(totalPrice);