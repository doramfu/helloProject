// string1.js
const person = {
    fullName: 'Hong',
    age: 10,
    toString: function() {
        return this.fullName + ', ' + this.age;
    }
}

person.fullName = 'Hwang'; //상수 값변경가능
person.toString();

const str = 'Hwang';
str.length;
let newStr = str.substring(-3, -1 );
console.log(newStr);

newStr = str.replace('a', ',').replace(',','.');
console.log(newStr);

// 주민번호 :  20000101-3123456, 19990101-2123456
//             19850101-1234567, 19870101-2123456, 199201011234561
// 남자/여자 구별하는 function
function getGender(jm) {
    if(jm.length != 13 && jm.length != 14) {
        return '잘못된 변호입니다'
    }
    let genNum = jm.replace('-','').replace(' ','').substring(6,7);
    genNum = jm.slice(-7, -6); //하이푼이 들어가면 뒤에서부터
    let gender = '남자';

    if (genNum == '1' || genNum == '3') {
        gender = '남자';
    }else if (genNum == '2' || genNum == '4') {
        gender = '여자';
    }else {
        gender = 'None;'
    }
    return gender;
}
console.log(getGender('850101-1234567'));
console.log(getGender('870101 2123456'));
console.log(getGender('9201012123456'));
console.log(getGender('920101212345612312'));

console.log('hello'.toUpperCase().toLowerCase()); // 문자를 대문자로 변경 = toUpperCase() ,
// 소문자로 변경 = toLowerCase() 

let str1 = 'hello',
    str2 = 'world';
console.log(str1.concat(' ',str2,'!!')); //concat>> 두문자를 연결


let str3 = str1.concat(' ',str2,'!!');

let pos = str3.charAt(2);  
console.log(pos);

let ary = str3.split(' ');
for(let str of ary) {
    console.log(str);
}

let temp = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae recusandae neque, deleniti praesentium debitis odit a, exercitationem, laudantium necessitatibus sit doloribus ipsam eveniet dolores ut. Dolorem repellat culpa adipisci dignissimos.';
let tempAry = temp.split(' '); //가로안에 들어가는것은 구분자정하기
console.log(tempAry.length);

let fruits = 'Apple Banana Cherry Melon';
let fruit = prompt('과일입력: ');

function getLoc(fruit) {
    // 0, null, '', undefined => false
    if (!fruit) { //값이 안들어오면 에러가 나오기때문에 반드시 처리해줘야되는구문
        return;
    }
    let fruitsAry = fruits.split(' ');
    let cnt = 0;
    console.log(fruitsAry);
    for (let i = 0; i < fruitsAry.length; i++) {
        if(fruitsAry[i].toUpperCase() == fruit.toUpperCase()) {
            cnt = i + 1;
        }
    }
    if(cnt == 0 ) {
        return '만족하는 값이 없습니다.';
    }
    return cnt + '번째';
}
console.log(getLoc(fruit));