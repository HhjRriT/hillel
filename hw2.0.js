const num1 = +prompt("введите первое число");
const num2 = +prompt("введите второе число");
if (num1 > num2) {
    alert(num1 + " больше чем " + num2);
} else if (num1 < num2) {
    alert(num2 + " больше чем " + num1);
} else {
    alert("числа равны");
}

const numN = +prompt("дайте число") % 10;
if (numN % 2 === 1) {
    alert("число заканьчивается на " + numN + " не четное");
} else {
    alert("число заканьчивается на " + numN + " четное");
}

const userName = prompt("Привет, как тебя зовут?");
const age = 2021 - prompt("Веддите ваш год рождения");
const answer = confirm("Алкоголь употребляем?");
if (answer && age > 40) {
    console.log(userName + ", Не злоупотребляйте");
} else if (answer && age < 18) {
    console.log(userName + ", Ты что?! Маме расскажу!");
} else if (answer && age > 18 && age < 40) {
    console.log(userName + ", Только водку с пивом не мешай..");
} else {
    console.log(userName + ", Так держать!");
}



