const number = [10,20,30,45,267,3,4,2];

const newNum = number.filter(function(x) { return x > 20;});
console.log(newNum);

const evenNum = newNum.filter(function(y) { return y % 2== 0; });
console.log(evenNum);

const sortedvalue = evenNum.sort(function(a,b) { return a-b; });
console.log(sortedvalue);


let today = new Date();
//year , month , day , hour , minute , second , millisecond
// days and months start form 0-6 and 0-11 respectively
today = new Date(2023,11,12,10,20,45,230);
today = new Date(1999,11,12,10,20,45);
today = new Date(1998,11,12,10,20);
today = new Date(1997,11,12,10);
today = new Date(2020,11,12);
today = new Date(8958874389);

console.log(today);

const utcData = today.toUTCString();

console.log(utcData);

const mydate = Date.now();

console.log(mydate);
const msec = Date.parse("")