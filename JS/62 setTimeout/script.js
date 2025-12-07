document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

// function SayHello(){
//     window.alert("Hello, World!");
// }

//setTimeout(SayHello,3000);
//setTimeout(function(){window.alert("Hello world")},3000);
//setTimeout(()=>window.alert("Hello world"),3000);

// const timeoutId =setTimeout(()=>window.alert("Hello world"),3000);

// clearTimeout(timeoutId);
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(()=>window.alert("Hello world"),3000);
console.log("Timer started");
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Timer cleared");
}
