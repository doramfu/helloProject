// dom4.js
const titles = ['이름','학생번호','점수'];

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

let parent = document.getElementById('show');

//table > thead > tbody
let tbl = document.createElement('table');
tbl.setAttribute('border', '1');
parent.appendChild(tbl);

//<thead></thead>
let thd = document.createElement('thead');
let tr = document.createElement('tr');
thd.appendChild(tr);
titles.forEach(function(title) {
    let th = document.createElement('th');
    let text = document.createTextNode(title);
    th.appendChild(text);
    tr.appendChild(th);
});
//버튼.
let th = document.createElement('th');
let text = document.createTextNode('삭제');
th.appendChild(text);
tr.appendChild(th);

//<tbody></tbody>
let tbd = document.createElement('tbody');
tbd.appendChild(tr);
students.forEach(function(student) {
    let tr = document.createElement('tr');
    tr.onmouseover = function(e) {
        e.target.parentNode.style.backgroundColor = 'yellow';

    }
    tr.onmouseout = function(e) {
        //기본색상으로 변경
        e.target.parentNode.style.backgroundColor = null;
    }
    for(let field in student) {
        //field 객수만큼 반복해서 생성.
        let td = document.createElement('td');
        let text = document.createTextNode(student[field]);
        td.appendChild(text);
        tr.appendChild(td);    
    }
    //삭제버튼
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.onclick = function(e) {
        console.log(e.target);
        e.target.parentNode.parentNode.remove();
    }
        let text = document.createTextNode('삭제');
        btn.appendChild(text);
        td.appendChild(btn);
        tr.appendChild(td); 
    
    // <td>이름</td>
    // let td = document.createElement('td');
    // let text = document.createTextNode(student.fullName);
    // td.appendChild(text);
    // tr.appendChild(td);
    // <td>학번</td>
    // td = document.createElement('td');
    // text = document.createTextNode(student.studNo);
    // td.appendChild(text);
    // tr.appendChild(td);
    //<td>점수</td>
    // td = document.createElement('td');
    // text = document.createTextNode(student.score);
    // td.appendChild(text);
    // tr.appendChild(td);

    tbd.appendChild(tr);
});

tbl.appendChild(tbd);

tbl.appendChild(thd);

