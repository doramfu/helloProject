// function3.js

function sumAry(ary) {
    var sum = 0;
    for (var i = 0; i < ary.length; i++) {
        sum += ary[i];
    }
    return sum;
}

var result = sumAry([1, 2, 3, 4, 5]);
console.log(`결과값: ${result}`);

function getMax(first, last) {
    if (first > last) {
        return first;
    } else {
        return last;
    }
}

console.log(getMax(30, 40));

function getMaxVal(ary) {
    //ary 배열에 값중에서 제일 큰값 반환.
    var maxVal = 0;
    for (var i = 0; i < ary.length; i++) {
        //var temp = ary[i];
        if (ary[i] > maxVal) {
            maxVal = ary[i];
        }
    }
    return maxVal;
}
var numAry = [34, 20, 15, 8, 10, 55];
console.log(`최대값: ${getMaxVal(numAry)}`);
function getMinVal(ary) {
    var minVal = ary[0];
    for(var i=1; i<ary.length; i++) {
        if(ary[i]<minVal) {
            minVal = ary[i];
        }
    }
    return minVal;
}
console.log(`최소값: ${getMinVal(numAry)}`);