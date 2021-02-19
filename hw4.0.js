function getCircleR(radius) {
    return Math.PI * radius * radius;
}

function getCircleL(radius) {
    return 2 * Math.PI * radius;
}

function getMid(num1, num2) {
    return (num1 + num2) / 2;
}

function calc(num1, num2, action) {
    if (action === "+") {
        return num1 + num2;
    } else if (action === "-") {
        return num1 - num2;
    } else if (action === "*") {
        return num1 * num2;
    } else if (action === "/") {
        return num1 / num2;
    } else if (action === "%") {
        return num1 * (num2 / 100);
    } else if (action === "^") {
        return Math.pow(num1, num2);
    } else {
        console.log("no action")
    }
}

// решение под ввод с промта + switch case
function calcPromted() {
    const num1 = prompt("первое число");
    const num2 = prompt("второе число");
    const action = prompt("действие из +, -, *, /, %, ^");
    let result;
    switch (action) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 * (num2 / 100);
            break;
        case "^":
            result = Math.pow(num1, num2);
            break;
    }
    return result
}

console.log(calcPromted())
