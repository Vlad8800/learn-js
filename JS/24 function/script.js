document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});
StartProgram();
function StartProgram(){
  let username = "Vlad"
let years = 20;
happyBirthday(username, years);
happyBirthday(username, years);
happyBirthday(username, years);
}

function happyBirthday(username, years){
    console.log("Happy Birthday to you!")
    console.log("Happy Birthday to you!")
    console.log("Happy birthday dear "+ username)
    console.log("Happy Birthday to you!")
    console.log("you are "+ years+" years old")
}
