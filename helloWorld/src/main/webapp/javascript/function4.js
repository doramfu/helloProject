//function4.js

var students = [{
    studentName: '홍길동',
    score: 80,
    birth: '1994-05-01',
    phone: '010-1111-1111',
    gender: '남자'
}, {
    studentName: '김민수',
    score: 90,
    birth: '1999-11-03',
    phone: '010-1234-1234',
    gender: '여자'
}, {
    studentName: '박이현',
    score: 85,
    birth: '2000-04-23',
    phone: '010-2222-3333',
    gender: '남자'
}];

function makeTable(ary) {
    var str = '';
    str += `<table border='1'>`;
    str += `<thead><tr><th>이름</th><th>점수</th><th>생년월일</th><th>연락처</th><th>성별</th></tr></thead>`;
    str += `<tbody>`
    for(var student of ary) {
        str += '<tr>';
        //td생성.
        for(var field in student) {
            str += `<td>${student[field]}</td>`;//스튜던트필드안에있는걸 땡겨옴
        }
        // str += `<td>${student.studentName}</td>`;
        // str += `<td>${student.score}</td>`;
        // str += `<td>${student.birth}</td>`;
        // str += `<td>${student.phone}</td>`;
        
        str += '</tr>';
    }
    str += `</tbody>`;
    str += `</table>`;
    return str;
}

// document.write(makeTable(students));

mackCal(2022, 5);
mackCal(2022, 6);
