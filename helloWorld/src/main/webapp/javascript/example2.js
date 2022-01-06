// example2.js

let datas = `[{"id":1,"first_name":"Candida","last_name":"Maddyson","email":"cmaddyson0@usnews.com","gender":"Female"},
{"id":2,"first_name":"Aldo","last_name":"Hutchings","email":"ahutchings1@virginia.edu","gender":"Female"},
{"id":3,"first_name":"Kristien","last_name":"Dallin","email":"kdallin2@networksolutions.com","gender":"Male"},
{"id":4,"first_name":"Kingsly","last_name":"Brothwood","email":"kbrothwood3@blogspot.com","gender":"Male"},
{"id":5,"first_name":"Othelia","last_name":"Jeannenet","email":"ojeannenet4@360.cn","gender":"Female"},
{"id":6,"first_name":"Bernie","last_name":"Keers","email":"bkeers5@squidoo.com","gender":"Male"},
{"id":7,"first_name":"Caitrin","last_name":"McLay","email":"cmclay6@ehow.com","gender":"Male"},
{"id":8,"first_name":"Averil","last_name":"Appleby","email":"aappleby7@hc360.com","gender":"Female"},
{"id":9,"first_name":"Alida","last_name":"Walker","email":"awalker8@netvibes.com","gender":"Male"},
{"id":10,"first_name":"Wain","last_name":"Mounfield","email":"wmounfield9@furl.net","gender":"Male"},
{"id":11,"first_name":"Zora","last_name":"Storres","email":"zstorresa@prnewswire.com","gender":"Male"},
{"id":12,"first_name":"Dion","last_name":"Baynard","email":"dbaynardb@diigo.com","gender":"Female"},
{"id":13,"first_name":"Delia","last_name":"Gonnelly","email":"dgonnellyc@clickbank.net","gender":"Female"},
{"id":14,"first_name":"Sergeant","last_name":"Carl","email":"scarld@posterous.com","gender":"Male"},
{"id":15,"first_name":"Broddie","last_name":"Vamplew","email":"bvamplewe@google.nl","gender":"Female"}]`;

let employees = JSON.parse(datas);
console.log(employees);

document.write(`<table border="1">`);
document.write(`<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Gender</th></tr></thead>`);
document.write(`<tbody>`);
employees.forEach(empInfo);
document.write(`</tbody>`);
document.write(`</table border="1">`);

function empInfo(item) {
    console.log(item.id, item.first_name, item['last_name'],item['gender']);
    document.write(`<tr><td>${item.id}</td><td>${item.first_name}-${item.last_name}<td>${item.email}</td><td>${item.gender}</td></tr>`);
}

let firstNames = [];
employees.forEach(function (item, ind) {
    firstNames.push(item.first_name);
   
    // let firstName = item.first_name;
    // for(let i=0; i<firstName.length; i++) {
    //     firstNames.push(firstName[i]);
    // }
});
//employees => 배열값 중 first_name = > 
console.log(firstNames)