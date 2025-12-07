document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});
//Date(year,month,hours,minute,second)
// const date = new Date(2024, 0,1,2,3,4);
const date = new Date();
// date.setFullYear(2025);
// date.setMonth(11); // December (0-based index)
// date.setDate(25); // 25th
// date.setHours(10);
// date.setMinutes(30);
// date.setSeconds(45);
const date1 = new Date(2023, 11, 31); // December 31, 2023
const date2 = new Date(2024, 0, 1); // January 1, 2024

if (date1 < date2) {
    console.log("Happy New Year!");
}
console.log(date);
// const year = date.getFullYear();
// const month = date.getMonth(); // Months are zero-based
// const day = date.getDate();
// const dayOfWeek = date.getDay(); 
// console.log(dayOfWeek)// 0 (Sunday) to 6 (Saturday)
// console.log(day)