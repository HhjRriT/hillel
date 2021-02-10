const userName = prompt("Привет, как тебя зовут?");
const age = 2021 - prompt("Веддите ваш год рождения");
alert(userName + " " + age);

alert("задача№2");
const num1 = +prompt("введите первое число");
const num2 = +prompt("введите второе число");
const num3 = +prompt("введите третье число");
const sum = num1 + num2 + num3;
alert("sum = " + sum);
const middle = (num1 + num2 + num3) / 3;
alert('среднее =' + (middle.toFixed(2)));
let even = "";
let odd = "";
if (num1 % 2 === 1) {
    odd = odd + " " + num1;
} else {
    even = even + " " + num1;
}
if (num2 % 2 === 1) {
    odd = odd + " " + num2;
} else {
    even = even + " " + num2;
}
if (num3 % 2 === 1) {
    odd = odd + " " + num3;
} else {
    even = even + " " + num3;
}
alert("EVEN " + even)
alert("ODD " + odd)

alert("задача№3");
const some = prompt("введите 5ти значное число");
const number1 = some % 10;
const number2 = (some % 100 - number1) / 10;
const number3 = (some % 1000 - number2 * 10 - number1) / 100;
const number4 = (some % 10000 - number3 * 100 - number2 * 10 - number1) / 1000;
const number5 = (some % 100000 - number4 * 1000 - number3 * 100 - number2 * 10 - number1) / 10000;
alert(number1 + " " + number2 + " " + number3 + " " + number4 + " " + number5)