//sample1.js

var memNum = window.prompt('입장객은 몇명입니까?');
var colNum = window.prompt('한줄에 앉을 사람?');

//memNum / colNum => 나눈 값이 라인의 수.
//56/ 5 => 11.2
var rowNum = Math.ceil(memNum / colNum); // Math.ceil >> 올림
var cnt = 0;
// 56명, 5명식.
for (var i = 1; i <= rowNum; i++) {
    for (var j = 1; j <= colNum; j++) {
        document.write(`<span>좌석 ${i}-${j} </span>`);
        cnt++;
        console.log(cnt, memNum)
        if (cnt == memNum) {
            break;
        }
    }
    document.write('<br>');
}


document.write();