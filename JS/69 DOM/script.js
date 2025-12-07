document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

document.title = 'mywebsite';
document.body.style.background = 'lightblue';

console.dir(document);

const username = "Vlad";
const wellcomeMsg = document.getElementById('wellcome-msg');
wellcomeMsg.textContent += username ==="" ? `Guest!` : username;