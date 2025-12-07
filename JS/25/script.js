document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

let area;
let width;
let height;

width =prompt("Enter width:")
height = prompt("Enter height:")

area = getArea(width,height);

console.log("The area is: " + area);

function getArea(width,height){
    let result = width * height;
    return result;
}
