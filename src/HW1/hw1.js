import './hw1.scss';

/* Задача 1 */
function randomInteger(min, max) {
    let random = (min + (max - min) * Math.random());
    random = Math.round(random);
    alert(random);
}

randomInteger(500, 1000);

/* Задача 2 */
let user = {
    name: "Вася",
    surname: "Петров"
};
console.log('My name is ' + user.name + ' my Surname is ' + user.surname);

let name = otherName;
let otherName = 'Сергей';
console.log('My name is ' + otherName + ' my Surname is ' + user.surname);

delete user.name;
console.log(user);

/* Задача 3 */
function isEmpty(obj) {
    let counter = 0;
    for (let key in obj) {
        counter++;
    }
    if (counter === 0) {
        alert(true); // вместо alert должно быть return
    }
    else {
        alert(false); // вместо alert должно быть return
    }
}

isEmpty(user);

/* Задача 4 */
let salaries = {
    John: 400,
    Jack: 200,
    Denis: 800,
    test: "dfdd"
};

function calc(obj) {
    let sum = 0;
    for (let key in obj) {
        // if (!isNaN(obj[key]))
        //     sum = sum + obj[key];
        if (typeof obj[key] === "number") {
            sum = sum + obj[key];
        }
    }
    alert(sum);
}

calc(salaries);

/* Задача 5 */

function maxSalary(office) {
    let maxSum = 0;
    let maxSalaryName = "";
    for (let name in office) {
        if (office[name] >= maxSum) {
            maxSum = office[name];
            maxSalaryName = name;
        }
    }
    alert(maxSalaryName);
}

maxSalary(salaries);

/* Задача 6 */

function multiplyNumeric(object) {
    for (let key in object) {
        if (typeof object[key] === 'number') {
            object[key] = object[key] * 2;
        }
    }
}

multiplyNumeric(salaries);

alert(salaries.Denis);

/* Задача 8 */

function userNumbers() {
    let numbersArr = [];
    while (true) {
        let number = prompt('Enter number', '');
        if (number === '' || isNaN(number) || number === null) {
            break;
        }
        numbersArr.push(+number);
    }

    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        sum = sum + numbersArr[i];
    }

    alert(sum);
}

userNumbers();

/* Задача 9 */

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            alert(i);  //вместо alert должно быть return
        }
    }
    alert('-1'); //вместо alert должно быть return
}

let test = ['one', 'two', 'three', 'four'];

find(test, 'three');

/* Задача 10 */

function filterRange(arr, a, b) {
    let arrNew = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > a && arr[i] < b) {
            arrNew[i] = arr[i];
        }
    }
    arrNew.splice(0, a);
    alert(arrNew);
}

let kr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterRange(kr, 2, 6);

/* Задача 11 */

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= result;
    }
    alert(result);

    // alert(Math.pow(x, n));
}

pow(5, 2);
