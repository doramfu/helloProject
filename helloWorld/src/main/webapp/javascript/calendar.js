// canlendar.js

// sample2.js

var today = new Date(2022, 0);
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

var otherDay = new Date(2021, 4, 3);

console.log(otherDay);
console.log(otherDay.getFullYear());
console.log(otherDay.getMonth());
console.log(otherDay.getDate());
console.log(otherDay.getDay());

// document.write(`<h3>${today.getFullYear()}년 ${today.getMonth()+1}월</h3>`);
// var lastDay = new Date(2022, 1 ,1);
// document.write(`<span>${lastDay.getDate()}</span>`);
// document.write(today.getDay())
// for(var n = 0; n<3; n++) {
//     document.write('<span></span>');
// }
// for(var i=1; i<=30; i++) {
//     document.write('<span>' + i + '</span>');
//     if((i+3) % 7 == 0) {
//         document.write('<br>');
//     }
// }
var year = 2022;
var month = 5;

function mackCal(year, month) {
    var oneMonth = new Date(year, month - 1, 1);
    var latsMonth = new Date(year, month, 0);
    var firstDayofMonth = oneMonth.getDay();
    var lastDateofMonth = latsMonth.getDate();
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

    document.write(`<h3>${oneMonth.getFullYear()}년 ${oneMonth.getMonth()+1}월</h3>`);
    // 배열을 활용해서 요일정보 출력.

    for (var day of days) {
        document.write('<span>' + day + '</span>');
    }
    document.write('<br>');
    // document.write('<span>일</span>');
    // document.write('<span>월</span>');
    // document.write('<span>화</span>');
    // document.write('<span>수</span>');
    // document.write('<span>목</span>');
    // document.write('<span>금</span>');
    // document.write('<span>토</span>');

    //빈 공란 출력.
    for (var n = 0; n < firstDayofMonth; n++) {
        document.write('<span></span>');
    }
    //날짜 출력.
    for (var i = 1; i <= latsMonth.getDate(); i++) {
        if((i + n) %7 == 1) {
            document.write('<span class="sunday">' + i + '</span>')
        }else {
            document.write('<span>' + i + '</span>');
        }
        if ((i + n) % 7 == 0) {
            document.write('<br>');
        }
    }
}