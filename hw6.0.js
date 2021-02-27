function isSymbolPresentInString(str, symbol) {
    for (let i of str) {
        if (i === symbol) {
            return true;
        }
    }
    return false;
}

console.log(isSymbolPresentInString("sometext", "t"));

function getSymbolIndex(str, symbol) {
    let index = 0;
    for (let i of str) {
        if (i === symbol) {
            return index;
        }
        index++;
    }
    return -1;
}

console.log(getSymbolIndex("hello lol", "l"));

const obj = {
    one: undefined,
    two: 12
}

function copy(target, origin) {
    for (let i in origin) {
        target[i] = origin[i];

    }
    return target;
}

const objCopy = (copy({}, obj));

function objectCheck(obj1, obj2) {
    for (let i in obj1) {
        if (!(i in obj2) || obj1[i] !== obj2[i] || Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
    }
    return true;
}

console.log(objectCheck(obj, objCopy))

function charCalculated(str) {
    let result = {};
    for (let i of str) {
        if (!(i in result)) {
            result[i] = 1;
        } else if (i in result) {
            result[i] = ++result[i];
        }
    }
    return result;
}

console.log(charCalculated("aaaadddddddddwwwa"));
