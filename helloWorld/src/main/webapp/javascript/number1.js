//number1.js

let num1 = 100.123;

console.log(Math.floor(num1)); //소수점 아래를 버리는 매써드 100
console.log(Math.ceil(num1)); //소수점 올림메서드 101
console.log(Math.round(num1)); //소수점 반올림 100
// 1 2 : 1.4
// 2
// 1.4
// 1
let findVal = -1;
let order = parseInt(Math.random() * 9) + 1;
for(let i=0; i < 9; i++){
    let temp = parseInt(Math.random() * 9) + 1;
    document.write(`<div>${temp}</div>`);
    if(i%3 == 2) {
        document.write('<br>');
    }
    if( i == order ) {
        findVal = temp;
    }
}
window.alert(findVal + '를 찾으세요');

function clickFnc(e) {
    console.log(e.target.innerText);
    // window.alert(e.target.innerText);
    if(e.target.innerText == findVal) {
        window.alert( findVal + '를 찾았습니다!');
        e.target.style.color = 'blue';
    }
}

let divElem = document.getElementsByTagName('div');
console.log(divElem);
for(let i=0; i<divElem.length; i++) {
    divElem[i].onclick = clickFnc;
}

