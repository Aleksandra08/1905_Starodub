import './lesson11.scss';
import {Lighter} from "./components/lighter/lighter";

const firstLighter = new Lighter(document.querySelector('#lighter1'));

//
//
// function test() {
//     console.log('Test');
// }
//
// function greeating() {
//     console.log(this);
//     console.log('Hello my name is, ' + this.name);
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = greeating;
// }
//
//
// function Developer(name, age, lang) {
//     this.name = name;
//     this.age = age;
//     this.lang = lang;
//     this.greet = greeting;
//     this.develop = function () {
//         console.log('Written code at ' + this.lang);
//     }
// }
//
//
// const person = new Person('John', 30);
// const person2 = new Person('Jack', 20);
// const js = new Developer('Jack', 20, 'JS');
// const dotNetDev = new Developer('Vasyl', 20, 'c#');
// const javaDev = new Developer('John', 20, 'Java');
//
//
// person.greet();
// person2.greet();
// dotNetDev.develop();
// js.develop();
// javaDev.develop();
// debugger;
// console.log(Object.keys(person));
//

//пример замыкания
//function counter() {
// const btn = document.querySelector('#btn');
//let clickCounter = 0;
// btn.addEventListener('click', () => { //вариант вызова
// btn.addEventListener('click', function () {
//   console.log(this);  // вызов идет НЕ с дом-деревабне с html-документа.
// clickCounter++;
//console.log(clickCounter);
//})
//}

//counter();

