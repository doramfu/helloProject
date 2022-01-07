// dom3.js

let div = document.createElement('div');
div.setAttribute('id', 'show');
let input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('value','test');
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
btn1.setAttribute('id','delBtn');
btn2.setAttribute('id','addBtn');
let text1 = document.createTextNode('조회삭제');
let text2 = document.createTextNode('추가');
let ul = document.createElement('ul');
let lists = [];
for(let i=0; i<5; i++) {
    lists[i] = document.createElement('li');
}
console.log(lists);

let texts = ['김은서','황보경','고권영','류기태','구자현'];
for(let i=0; i<texts.length; i++) {
    let list = document.createElement('li');
    list.appendChild(texts[i]);
    }
console.log(texts);
let li1 = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');
let li5 = document.createElement('li');

let text3 = document.createTextNode('김은서');
let text4 = document.createTextNode('황보경');
let text5 = document.createTextNode('고권영');
let text6 = document.createTextNode('류기태');
let text7 = document.createTextNode('구자현');

let pTag = document.createElement('p');


for(let text of texts) {
    for(let list of lists) {
        list.append(text);
    }
}

    
let list = []

for(let i = 0; i<5; i++) {
    // ul.appendChild(list);
}

li1.appendChild(text3);
li2.appendChild(text4);
li3.appendChild(text5);
li4.appendChild(text6);
li5.appendChild(text7);



let bdy = document.getElementById('bdy');
bdy.appendChild(input);
bdy.appendChild(btn1);
bdy.appendChild(btn2);
bdy.appendChild(ul);
btn1.appendChild(text1);
btn2.appendChild(text2);
ul.appendChild(lists);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
document.querySelector('#show');
