// function6.js
// let sum = function sum(a, b) {
//     return a + b;
// } >>>>>>>>>>>>>let은 이미 선언이 되었기때문에 중복 x
let sum = function(first, last) {
    return first + last;
}
let anotherSum = sum;
console.log(sum(10, 20));
console.log(anotherSum(30,40));

// Arrow Function(화살표 함수)
let getMinVal = (first, last) => {
    return first > last ? last : first; } //매가값을 받아서 블럭안을 실행하라는 구문 ex)람다표현식
    // if(first > last) {
    //     result = last;
    // }else {
    //     result = first;
    // }
    //var result = first > last ? last : first; //3항연산자 first값이 크면 last 값을 result에 담는다
    //return first > last ? last : first;
//}

console.log(getMinVal(10,5));