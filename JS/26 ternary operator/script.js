document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

//  let adult = CheckAge(20);

// function CheckAge(age) {

//     if (age > 18) {
//         return true;
//     }   else {
//         return false;
//     }
// }


// function CheckAge(age) {

//     return age >=18 ? true : false;
// }

// console.log(adult);
CheckWinner(true);

function CheckWinner (win){
    win? console.log("You win!"): console.log("You lose");
}