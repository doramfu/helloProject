//employee.js
let data = '';

const titles = ['EmpID', 'fName', 'lName', 'HireDate', 'Email', 'Job', 'Salary'];
const fields = ['employeeId', 'firstName', 'lastName', 'hireDate', 'email', 'jobId', 'salary'];
// thead영역
function makeHead() {
	let thd = document.createElement('thead');
	let tr = document.createElement('tr');
	//체크박스
	let th = document.createElement('th');
	let checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.addEventListener('change', allCheckFnc);
	th.appendChild(checkBox);
	tr.appendChild(th);
	// 필드영역.
	titles.forEach(function(field) {
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
	for (let i = 0; i < checkbox.length; i++) {
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
	data.forEach(function(obj) {
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
	checkBox.setAttribute('type', 'checkbox');
	td.appendChild(checkBox);
	tr.appendChild(td);
	//데이터 영역.
	for (let field of fields) {
		let td = document.createElement('td');
		let text = document.createTextNode(item[field]);
		td.appendChild(text);
		tr.appendChild(td);
	}
	return tr;
}

//즉시실행함수.
(function drawTable() {
	// Ajax 호출
	let xhtp = new XMLHttpRequest();
	xhtp.onreadystatechange = function() {
		if (xhtp.readyState == 4 && xhtp.status == 200) {
			console.log('readyState: ' + xhtp.readyState);
			console.log('status: ' + xhtp.status);

			data = JSON.parse(xhtp.responseText);
			console.log(data);

			let tbl = document.createElement('table');
			tbl.setAttribute('border', '1');
			tbl.append(makeHead());
			tbl.append(makeBody());
			document.getElementById('list').appendChild(tbl);
			//showCenterList(data);
		}
	}
	xhtp.open('get', '../EmpList.json');
	xhtp.send();

	// Ajax 호출.
}());
// drawTable();

//등록버튼 이벤트
let addBtn = document.querySelector('#btn>button');
addBtn.addEventListener('click', addCallback);

function addCallback() {
	let eid = document.querySelector('input[name="eid"]').value;
	let fname = document.querySelector('input[name="fname"]').value;
	let lname = document.querySelector('input[name="lname"]').value;
	let email = document.querySelector('input[name="email"]').value;
	let hireDate = document.querySelector('input[name="hire_date"]').value;
	let salary = document.querySelector('input[name="salary"]').value;

	if (eid == "" || lname == "" || hireDate == "" || email == "") {
		window.alert('필수값을 입력하세요!!');
		return;
	}

	const xhtp = new XMLHttpRequest();
	xhtp.onload = function() {
		let result = JSON.parse(xhtp.responseText); //json -javascript object 변경
		console.log(result);
		let tr = makeTr(result);
		document.querySelector('#list>table>tbody').appendChild(tr);
	}
	xhtp.open('post', '../InsertEmployeeServlet');
	xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhtp.send(`employee_id=${eid}&first_name=${fname}&last_name=${lname}&email=${email}&hire_date=${hireDate}&salary=${salary}`);

	/*let obj = {
		name: name,
		phone: phone,
		addr: addr,
		email: email
	}
	let tr = makeTr(obj);
	document.querySelector('#list>table>tbody').appendChild(tr);
	*/
}

// 삭제버튼 이벤트 등록
let delBtn = document.querySelector('#btn>button:nth-child(2)');
delBtn.addEventListener('click', delCallback);

function delCallback() {
	let chks = document.querySelectorAll('tbody input[type="checkbox"]');
	for (let i = 0; i < chks.length; i++) {
		if (chks[i].checked == true) {
			console.log(chks[i].parentNode.nextSibling.innerText);
			let del_id = chks[i].parentNode.nextSibling.innerText;

			//ajax 호출. (삭제서블릿 호출 => 화면에서 삭제)
			const xhtp = new XMLHttpRequest();
			xhtp.onload = function() {
				//서버호출 결과 값을 받아오면 실행하는 부분.
				console.log(xhtp.responseText);
				let result = JSON.parse(xhtp.responseText);
				if(result.retCode == 'Success') {
				//화면삭제
				chks[i].parentNode.parentNode.remove();
				} else {
					window.alert(result.retVal);
				}
			}
			xhtp.open('post', '../DeleteEmployeeServlet');
			xhtp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			xhtp.send(`emp_id=${del_id}`);
		}
	}
}


//리스트 -> 입력화면에 보여주기.
let names = document.querySelectorAll('table tbody tr td:nth-child(2)');
for (let i = 0; i < names.length; i++) {
	names[i].addEventListener('click', showInfo);
}
function showInfo() {
	// this 이벤트를 받는 대상(td)
	for (let i = 0; i < names.length; i++) {

		let parent = names[i].parentNode;
		document.querySelector('input[name="name"').value = parent.childNodes[1].innerText;
		document.querySelector('input[name="phone"]').value = parent.childNodes[2].innerText;
		document.querySelector('input[name="addr"]').value = parent.childNodes[3].innerText;
		document.querySelector('input[name="email"]').value = parent.childNodes[4].innerText;
	}
}



