console.log("Вывести на страницу в одну строку через запятую числа от 10 до 20")
let text = "";
for (let i = 10; i <= 20; i++) {
    text += i + ", ";
}
console.log(text);

console.log("Вывести квадраты чисел от 10 до 20")
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

console.log("Вывести таблицу умножения на 7")
for (let i = 1; i <= 10; i++) {
    console.log("7 * " + i + " = " + i * 7);
}

console.log("Найти сумму всех целых чисел от 1 до 15")
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum += i;
}
console.log(sum);

console.log("Найти произведение всех целых чисел от 15 до 35")
let product = 15;
for (let i = 16; i <= 35; i++) {
    product = product * i;
}
console.log(product);

console.log("Найти среднее арифметическое всех целых чисел от 1 до 500")
let sum2 = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
}
console.log(sum2 / 500);

console.log("Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80")
let sumEven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(sumEven);

alert("Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3")
let text2 = "";
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        text2 += i + ", ";
    }
}
alert(text2);

alert("задача номер 9 ")
let some = prompt("введите целое число");
let deviders = "";
let count = 0;
let sumCount = 0;
for (let i = 1; i <= some; i++) {
    if (some % i === 0 && i % 2 === 0) {
        count++;
        sumCount += i;
        deviders += i + ",";
    } else if (some % i === 0) {
        deviders += i + ",";
    }
}
alert("Число - " + some + " его делители: " + deviders + " четных делителей - " + count + ", их сумма - " + sumCount);

console.log("Напечатать полную таблицу умножения от 1 до 10")
for (let i = 1; i <= 10; i++) {
    console.log("умножение на " + i);
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "= " + i * j);
    }
}

alert("игра")
const numberX = Math.floor(Math.random() * (10 + 1));
let gues;
do {
    if (gues === null) {
        console.log("игра остановлена");
        break;
    } else {
        gues = prompt("угадайте число");
    }
} while (+gues !== numberX)
alert(" это было " + numberX);