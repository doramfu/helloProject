// basic.js

//문자열 만들기

//'user stript' 구문을 사용시 자바스크립트가 빡빡?해진다 (자바처럼)

var v1; //undefined
var myname = "Hong";
v1 = "hello,world";
v1 = 'nice,world';
v1 = 'nice, "world"';
v1 = 'nice,' + myname;
v1 = `nice, ${myname}`;

v1 = 100;

v1 = 3.14;

var v2 = 10;

var result = v1 + v2;

var tureOrFalse = true;
tureOrFalse = false;
tureOrFalse = 10 < 20 ;
tureOrFalse = 10; // 0,null, undefined,'' >>> false 나머지느 참
tureOrFalse = null;

if(tureOrFalse) {
    console.log('참값입니다.');
} else {
    console.log('거짓이거나 값이 없습니다.');
}
console.log(result);
console.log(typeof result);

 str = '<ul>';
str = str + '<li>Apple</li>';
str += '<li>Banana</li>';
str += '<li>Cherry</li>';
str += '</ul>';
document.write(str);

// var 변수선언:
var num1 = 10;
// num3 = 30;
console.log('global: ' + num1);
// console.log('global: ' + num3);

function f1() { //펑션안에 변수선언을 하지않을 시 다른곳에 영향을 받지않음 >> 전역변수
    var num1 = 20;
    num3 = 40;
    console.log('local: ' + num1);
}
f1();

console.log('global: ' + num1);
// console.log('global: ' + num3);

