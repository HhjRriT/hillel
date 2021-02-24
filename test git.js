const num1 = +prompt("введите первое число");
const num2 = +prompt("введите второе число");
if (num1 > num2) {
    alert(num1 + " больше чем " + num2);
} else if (num1 < num2) {
    alert(num2 + " больше чем " + num1);
} else {
    alert("числа равны");
}
// test branch 2
// hgjhghghj

const numN = +prompt("дайте число") % 10;
if (numN % 2 === 1) {
    alert("число заканьчивается на " + numN + " не четное");
} else {
    alert("число заканьчивается на " + numN + " четное");
}
