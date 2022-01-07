//dom2.js
//document object model
// element(element node, attribute node, text node),tag
// <img src='sample.jpg'>, <input type='text' value='sample'>

let img = document.createElement('img');
img.setAttribute('src', 'sample.jpg');
img.setAttribute('id', 'mypicture');
img.setAttribute('width', '200px');

document.getElementById('show').appendChild(img);
console.log(img);

//<ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
// ul, li*3,li>text
let fruits = ['Apple', 'Banana', 'Cherry'];
let ul = document.createElement('ul');

// for(let fruit of fruits) {
//     let li = document.createElement('li');
//     let text = document.createTextNode(fruit);
//     li.appendChild(text);
//     ul.appendChild(li);
// }
fruits.forEach(callBackFnc);


function callBackFnc(item) {
    let li = document.createElement('li');
    let text = document.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
}

console.log(ul);

document.getElementById('bdy').appendChild(ul);

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function () {
    let sname = document.getElementById('sname').value;
    let list = document.querySelectorAll('#nameList>li');
    for (let i = 0; i < list.length; i++) {
        if (sname == list[i].innerText) {
            list[i].remove();
            break;
        }
    }
}

//1)이벤트 등록.
//2)이벤트 기능: 사용자의 입력값 -> <li>입력값</li>
//3)ul태그 착고 ul 하위에 붙여넣기

let addBtn = document.getElementById('addBtn');
addBtn.onclick = function() {
    let sname = document.getElementById('sname').value;
    let li = document.createElement('li');
    li.innerText = sname;
    let ul = document.querySelector('#nameList');
    ul.appendChild(li);
    document.getElementById('sname').value = "";
    document.getElementById('sanme').focus();
}