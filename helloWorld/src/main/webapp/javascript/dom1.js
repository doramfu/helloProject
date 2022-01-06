// dom1.js

let pelemt = document.querySelector('body>p');
console.log(pelemt);
pelemt.innerHTML = 'not hello';

let newP = document.createElement('p');
newP.innerHTML = 'Good, morning!';
console.log(newP);

pelemt.after(newP);

let list = document.querySelectorAll('ul>li');
list[0].remove();
console.log(list);

document.getElementById('delBtn').onclick = function () {
    let sname = document.getElementById('sname').value;
    let liTag = document.createElement('li');
    liTag.innerHTML = sname;
    let ul = document.querySelector('ul');
    ul.appendChild(liTag);
}

