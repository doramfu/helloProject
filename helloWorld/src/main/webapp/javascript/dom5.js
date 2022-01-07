// dom5.js
const date = [{
    name: '류지희',
    phone: '010-1234-0578',
    addr: '대구 중구 100번지',
    email: 'rjh@email.com'
}, {
    name: '차주연',
    phone: '010-1234-5678',
    addr: '대구 중구 200번지',
    email: 'cjy@email.com'
}, {
    name: '전호민',
    phone: '010-4321-0578',
    addr: '대구 중구 300번지',
    email: 'hm@email.com'
}];
// thead영역
function makeHead() {
    const fields = ['이름', '연락처', '주소', '이메일'];
    let thd = document.createElement('thead');
    let tr = document.createElement('tr');
    //체크박스
    let th = document.createElement('th');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    checkBox.addEventListener('change',allCheckFnc);
    th.appendChild(checkBox);
    tr.appendChild(th);
    // 필드영역.
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    });

    thd.appendChild(tr);
    return thd;
}
function allCheckFnc() {
    console.log(this.checked);
    //tbody쪽 checkbox 찾아서 for loop 모든 checked = true;
    let checkbox = document.querySelectorAll('tbody input[type="checkbox"');
    for(let i=0; i<checkbox.length; i++) {
        // if(checkbox[i].checked != true) {
        //     checkbox[i].checked = true;
        // }else if(checkbox[i].checked == true) {
        //     checkbox[i].checked = false
        // }
        checkbox[i].checked = this.checked;
        //this == thaed 체크박스 안을 가르킨다. this = 이벤트를받는 대상(<input>)
    }
}
// tbody 영역
function makeBody() {
    let tbd = document.createElement('tbody');
    date.forEach(function (obj) {
        tbd.appendChild(makeTr(obj));
    });
    return tbd;
}
//tr 생성.
function makeTr(item) {
    let tr = document.createElement('tr');
    // 체크박스.
    let td = document.createElement('td');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type','checkbox');
    td.appendChild(checkBox);
    tr.appendChild(td);
    //데이터 영역.
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        td.appendChild(text);
        tr.appendChild(td);
    }
    return tr;
}

//즉시실행함수.
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.append(makeHead());
    tbl.append(makeBody());
    document.getElementById('list').appendChild(tbl);
}());
// drawTable();

//등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let name = document.querySelector('input[name="name"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let addr = document.querySelector('input[name="addr"]').value;
    let email = document.querySelector('input[name="email"]').value;

    if (name == "" || phone == "" || addr == "" || email == "") {
        window.alert('필수값을 입력하세요!!');
        return;
    }
    let obj = {
        name: name,
        phone: phone,
        addr: addr,
        email: email
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);

}

// 삭제버튼 이벤트 등록
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click',delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for(let i=0; i<chks.length; i++) {
        if(chks[i].checked == true) {
            chks[i].parentNode.parentNode.remove();
        }
    }
}


//리스트 -> 입력화면에 보여주기.
let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
for(let i=0; i<names.length;i++) {
    names[i].addEventListener('click',showInfo);
}
function showInfo() {
    // this 이벤트를 받는 대상(td)
    for(let i=0; i<names.length; i++){
        
    let parent = names[i].parentNode;
    document.querySelector('input[name="name"').value = parent.childNodes[1].innerText;
    document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
    document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
    document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;
    }
}
console.log(parent.childNodes[2].innerText);



