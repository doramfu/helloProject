const date = [{
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}, {
    bookCode: 'P12301285',
    bookName: '이것이 자바다',
    writer: '홍성문',
    company: '신흥출판사',
    price: '25,000원'
}];


//thead
function makeHead() {
    const fields = ['도서코드', '도서명', '저자', '출판사', '금액', '삭제'];
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    //체크박스
    let th = document.createElement('th');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.addEventListener('change', allCheckFnc);
    th.appendChild(checkBox);
    tr.appendChild(th);
    //필드영역
    fields.forEach(function (field) {
        let th = document.createElement('th');
        let text = document.createTextNode(field);
        th.appendChild(text);
        tr.appendChild(th);
    })
    thead.appendChild(tr);
    return thead;
}

function allCheckFnc() {
    console.log(this.checked);

    let checkbox = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = this.checked;
    }
}
//tbody
function makeBody() {
    let tbody = document.createElement('tbody');
    date.forEach(function (item) {
        tbody.appendChild(makeTr(item));
    });
    return tbody;
}
//tr 
function makeTr(item) {
    let tr = document.createElement('tr');
    //체크박스
    let td = document.createElement('td');
    let checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    td.appendChild(checkBox);
    tr.appendChild(td);

    //데이터 영역
    for (let field in item) {
        let td = document.createElement('td');
        let text = document.createTextNode(item[field]);
        
        td.appendChild(text);
        tr.appendChild(td);
    }
    //삭제
    let delOne = document.createElement('button');
    delOne.innerText = '삭제';
    delOne.onclick = function(e) {
        e.target.parentNode.remove();
        console.log(e);
    };
    tr.appendChild(delOne);
        
        

    return tr;
}
(function drawTable() {
    let tbl = document.createElement('table');
    tbl.setAttribute('border', '1');
    tbl.append(makeHead());
    tbl.append(makeBody());
    document.getElementById('list').appendChild(tbl);
}());
//등록버튼이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
    let code = document.querySelector('input[name="bookcode"]').value;
    let bookname = document.querySelector('input[name="bookname"]').value;
    let writer = document.querySelector('input[name="writer"]').value;
    let company = document.querySelector('input[name="company"]').value;
    let price = document.querySelector('input[name="price"]').value;

    if (code == "" || bookname == "" || writer == "" || company == "" || price == "") {
        window.alert('필수값 입력바람');
        return;
    }
    let obj = {
        code: code,
        bookname: bookname,
        writer: writer,
        company: company,
        price: price
    }
    let tr = makeTr(obj);
    document.querySelector('#list>table>tbody').appendChild(tr);
    let re = document.querySelectorAll('input');
    for(let i = 0; i<re.length; i++) {
        re[i].value = "";
    }
}


//삭제버튼 이벤트
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
    let chks = document.querySelectorAll('tbody input[type="checkbox"]');
    for (let i = 0; i < chks.length; i++) {
        if (chks[i].checked == true) {
            chks[i].parentNode.parentNode.remove();
        }
    }
}


let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
for (let i = 0; i < names.length; i++) {
    names[i].addEventListener('click', showInfo);
}

function showInfo() {
    // this 이벤트를 받는 대상(td)
    for (let i = 0; i < names.length; i++) {

        let parent = names[i].parentNode;
        document.querySelector('input[name="bookcode"').value = parent.childNodes[1].innerText;
        document.querySelector('input[name="bookname"]').value = parent.childNodes[2].innerText;
        document.querySelector('input[name="writer"]').value = parent.childNodes[3].innerText;
        document.querySelector('input[name="company"]').value = parent.childNodes[4].innerText;
        document.querySelector('input[name="price"]').value = parent.childNodes[5].innerText;
    }
}