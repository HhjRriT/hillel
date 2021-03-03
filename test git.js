function createSum() {
    let sum = 0
    return {
        doSum : function (num) {
            return sum+=num;
        }
    }
}
const sum = createSum().doSum

console.log(sum(2))
console.log(sum(2))

console.log(sum(2))
console.log(sum(3))
console.log(sum(5))