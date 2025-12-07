document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

const car = {
    model:"Mustang",
    color:"red",
    year:2023,
    drive : function(){
        console.log(`You dring car. Car named ${car.model}`);
    },
    brake : function(){
        console.log(`You step on the brake.`);
    }
}

console.log(car);
console.log(car.drive())
console.log(car.model);
console.log(car.color);
console.log(car.year);
car.drive();
car.brake();