const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function doLog(element) {
    console.log(element);
}

function makeDouble(element) {
    return element * 2;
}

function isEven(element) {
    return element % 2 === 0;
}

function forEach(arr, callBack) {
    for (let i of arr) {
        callBack(i);
    }
}

forEach(someArray, doLog);

function map(arr, callBack) {
    const result = [];
    for (let i of arr) {
        result.push(callBack(i));
    }
    return result;
}

console.log(map(someArray, makeDouble));

function filter(arr, callBack) {
    const result = [];
    for (let i of arr) {
        if (callBack(i)) {
            result.push(i);
        }
    }
    return result;
}

console.log(filter(someArray, isEven));

function some(arr, callBack) {
    for (let i of arr) {
        if (callBack(i)) {
            return true;
        }
    }
    return false;
}

console.log(some(someArray, isEven))

function every(arr, callBack) {
    for (let i of arr) {
        if (!callBack(i)) {
            return false;
        }
    }
    return true;
}

console.log(every(someArray, isEven))