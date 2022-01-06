// array1.js

let delBtn = document.getElementById('delBtn');
delBtn.onclick = function() {
    let sname = document.getElementById('sname').value;
    if(!sname) {
        alert('값을 입력하세요!!');
        return;
    }

    let list = document.querySelectorAll('ul>li');
    console.log(list);
    for(let i = 0; i<list.length; i++) {
        if(list[i].innerText == sname) {
            list[i].style.display = 'none';
        }
    }
}


const numAry = [23, 17, 33, 72, 88];

let sum = 0;
numAry.forEach(function (item, idx, ary) {
    if (idx % 2 == 0)
        sum += item;
});
console.log(`합계: ${sum}`);

const names = ['김은서', '황보경', '고권영', '류기태', '구자현'];
// for(let i=0; i<3;i++) {
//     let addName = window.prompt('추가 이름 입력 >>');
//     names.push(addName);
// }

// const name1 = window.prompt('삭제할 이름 입력>> ');
// for (let i = 0; i < names.length; i++) {
//     if (name1 == names[i]) {
//         names.splice(i, 1);
//     }
// }
console.log(names);



names.splice(1, 2, '누군가', '누군가2', ); //splice(first,second,third) 첫번째는 어디서부터 
//2번째는 어디까지 3번째는 대체값이다
//만약 대체값을 안넣게되면 삭제.
console.log(names);
names.splice(1, 0, '누군가'); //첫번째 값은 인덱스값 //2번째 값은 위치값
//삭제할값이 없으면 추가값 ex) 0
console.log(names);
names.splice(4, 1);
console.log(names);


// let list = document.querySelectorAll('ul:nth-of-type(1)>li');
// console.log(list);
// list.forEach(function ( item, idx, ary) {
//     // console.log(item, idx, ary);
//     console.log(item, item.innerHTML);
//     if(idx % 2 == 0)
//         item.innerHTML = '<h3>hello</h3>';
// });
// for(let num of numAry) {
//     document.write(`<p>${num}</p>`);
// } 
