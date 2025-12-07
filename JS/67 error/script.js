document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});


// try{
//    console.log("Hello"); 
// }
// catch(error){
// console.error(error)

// }
// finally{
//     console.log("finished")
// }

// console.log("you reached the end");
try {
const divident = Number(window.prompt("Enter divident"));
const divisor = Number(window.prompt("Enter divisor"));

if( divisor == 0){
    throw new Error("Yon cannot divide by zero");
}
if( isNaN(divident) || isNaN(divisor)){
    throw new Error("Values must be numbers");
}

const result = divident / divisor;

console.log("The result is " + result);
}
catch (error) {
    console.error(error);
}
console.log("You reached the end");