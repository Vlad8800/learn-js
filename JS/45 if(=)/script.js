document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

//const greeting = function(username){
// console.log(`Hello ${username}`);
// }

// greeting("Vlad");

const greeting = username =>{console.log(`Hello ${username}`);}
greeting("Vlad");

const percent =function(x,y){
return x/y*100;
    console.log()
}
let grades = [100,50,90,80];
// console.log(`${percent(75,100)}%`);
grades.sort((x,y)=> y-x);
grades.forEach((element)=>console.log(element));

// grades.sort(descending);
// grades.forEach(print);
// function descending(x,y) {
//     return y-x;
// }

// function print(element){
//     console.log(element)
// }