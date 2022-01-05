// control.js

var num = prompt('점수를 입력하세요: ');
var grade = 'F';
if (num > 90) {
    grade = 'A'; //90~94: A, 95~ : A+
    if(num >= 95) {
        grade = 'A+';
    }
} else if (num > 80) { //80~84: B, 85~89: B+
    grade = 'B';
    if(num >= 85) {
        grade = 'B+';
    }
} else if (num > 70) {
    grade = 'C';
    if(num >= 75) {
        grade = 'C+'
    }
} else if (num > 60) {
    grade = 'D';
}

// num = parseInt(num / 10); //95/10=9.5
// switch (num) {
//     case 9:
//         grade = 'A';
//     case 8:
//         grade = 'B';
//     case 7:
//         grade = 'C';
//     case 6:
//         grade = 'D';
//     default:
//         grade = 'F';
// }

document.write(`<h3>점수는 : ${num}이고 등급은 ${grade} 입니다. `);