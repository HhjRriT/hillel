const someObj = {
    usersCount: [["activ", 2],["del", 0]],
    userInfo: [
        {userName: "art", userPass: 123, userId: 1},
        {userName: "ivan", userPass: 333, userId: 2}
    ],
    userMessages: {
        in: 2,
        out: 3
    }
}

const someArr = [1, {someKey: [{lucky: 13, name: "art"}]}, 3, 4];

function deepCopy(orig) {
    if (typeof (orig) !== "object") {
        return orig;
    } else if (Array.isArray(orig)) {
        let arr = [];
        for (const i of orig) {
            arr.push(deepCopy(i));
        }
        return arr;
    } else {
        let result = {};
        for (const i of Object.keys(orig)) {
            result[i] = deepCopy(orig[i]);
        }
        return result;
    }
}
const copyOfSomeObj = deepCopy(someObj);
console.log(someObj === copyOfSomeObj);
console.log(someObj.userInfo === copyOfSomeObj.userInfo);
console.log(deepCopy(someObj).usersCount[1][1] === someObj.usersCount[1][1]);

const copyOfSomeArr = deepCopy(someArr);
console.log(someArr === copyOfSomeArr);
console.log(someArr[1] === copyOfSomeArr[1]);
console.log(someArr[1].someKey[0] === copyOfSomeArr[1].someKey[0]);
console.log(someArr[1].someKey[0].lucky === copyOfSomeArr[1].someKey[0].lucky);



function createSum() {
    let sum = 0;
    return {
        doSum : function (num) {
            return sum+=num;
        }
    }
}
const sum = createSum().doSum;

console.log(sum(2))
console.log(sum(2))
console.log(sum(2))
console.log(sum(3))
console.log(sum(5))