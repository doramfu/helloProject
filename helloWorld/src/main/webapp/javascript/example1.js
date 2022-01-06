// example1.js

const students = [{
    fullName: '류지희',
    studNo: '1001',
    score: 80
}, {
    fullName: '차주연',
    studNo: '1002',
    score: 85
}, {
    fullName: '전호민',
    studNo: '1003',
    score: 83
}];

students.push({
    fullName: '홍정우',
    studNo: '1004',
    score: 88
});

students.unshift({
    fullName: '고원영',
    studNo: '1005',
    score: 90
});
students.shift(); //앞쪽에 있는 배열 삭제

students.pop(); // 뒤쪽에 있는 배열 삭제

document.write('<ul>');
students.forEach(liFnc); //callback function
document.write('</ul>');

function liFnc(item) {
    document.write(`<li>${item.studNo} - ${item.fullName} - ${item.score}</li>`)

}

const numAry = [1, 2, 3];
numAry.push(4);
numAry.push(10);
numAry.unshift(40);  //배열 맨앞쪽으로 추가.

console.log(numAry);