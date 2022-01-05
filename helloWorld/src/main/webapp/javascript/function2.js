// function2.js

function addNumber(first, last) {
    var sum = first + last;
    return sum;
}

var result1 = addNumber(10, 20);
var result2 = addNumber(15, 25);
var result3 = addNumber(result1, result2);

console.log(`첫번째: ${result1}, 두번째: ${result2}`);
console.log(`총 합: ${result3}`);

function sumBetweenNum(first, last) {
    // 첫번째 매개값과 두번째 매개값의 사이의 값을 합.
    var sum = 0;
    for (var i = first; i < last; i++) {
        if (i%2 != 1) 
            sum += i;
        }
        return sum;
}
var result4 = sumBetweenNum(1, 10);
var result5 = sumBetweenNum(1, 11);
console.log(`첫번째: ${result4}, 두번째: ${result5}`);
