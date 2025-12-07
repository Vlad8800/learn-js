document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

let username ="Vlad";
let userIndox=0;

displayUsername();
displayUserInbox();

login();

function login(){
displayUsername();
displayUserInbox();
}

function displayUsername(){
console.log(`Welcome ${username}`);
}

function displayUserInbox(){
console.log(`You have ${userIndox} new messsaged`)
}