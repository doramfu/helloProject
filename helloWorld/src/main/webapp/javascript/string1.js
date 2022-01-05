// string1.js
var val = 'hello';
val = new String('hello');
// console.log(typeof val); 타입보기
// console.log(val.length); 갯수보기
console.log(val.substring(2,3)); //인덱스값의 0~n까지의 인덱스를 가져오기



var h3Tag = document.querySelector('h3');
var text = h3Tag.innerHTML;
text = text.substr(2, 10);
str = text.slice(1, 5);
str = val.substring(0,2);
// console.log(h3Tag.innerHTML);
var elem = document.getElementById('show');
elem.innerHTML = text;
// elem.innerText = '<h3>Hello</h3>';
console.log(elem);