document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});
let symbol =window.prompt("Enter a symbol to use");
let rows = prompt("Enter number of rows");
let cols = prompt("Enter number of columns");

for(let i =1; i <=rows; i++){
   for(let j =1; j <=cols; j++){
    console.log(document.getElementById("myRectangle").innerHTML  += symbol);
}
document.getElementById("myRectangle").innerHTML  += "<br>";
}