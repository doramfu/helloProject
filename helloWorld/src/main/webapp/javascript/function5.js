// function5.js
var result = 100;
console.log(result);


function sum(first, last) {
    var result = first + last;
    console.log(result);
}
sum(10, 20);

var result = 200;

console.log(result);

let result1 = 300; //let은 중복이 안된다 final과 유사
let summay = 100;
console.log(summay); {
    //단 블럭안에서는 가능
    let summay = 200;
    console.log(summay)
}
console.log(summay);

for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('============');
// console.log(i);

let myName = 'Hong';
myName = 'Hwang';

const pi = 3.14; // const>>> 상수
// pi = 3.1414;

const obj = {
    fullName: 'kildongHong',
    birth: '2012-05-04',
    score: 80,
    showInfo: function () {
        return this.fullName + ', ' + this.age;
    },
    showAge: function() {
        let today = new Date();
        let birth = new Date(this.birth);
        let age = today - birth;
        age = age / (1000*60*60*24*365);
        age = Math.floor(age);
        return age;
    }
}
console.log(obj.fullName);

obj.age = 30; //>>> obj가 가지고있는 필드는 변경가능
console.log(obj.age);

console.log(obj.showInfo());
console.log(obj.showAge() + '살');
// document.write('hello');