document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

let grades = [85, 90, 78, 92, 88];

grades= grades.sort(SortedGradesas);

grades.forEach(print);

function SortedGrades(x,y) {

    return  y-x;
}
function SortedGradesas(x,y) {

    return  x-y;
}

function print(element){
    console.log(element);
}