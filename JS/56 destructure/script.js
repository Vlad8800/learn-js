document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});
// let a =1;
// let b =2;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);


// const colors =["red","green","blue"];
// [colors[0],colors[2]]=[colors[2],colors[0]]

// console.log(colors);

// const colors =["red","green","blue,","black","white"];

// const  [firstColor, secondColor, thirdColor,...extraColors] =colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

function displayPerdon({firstname,lastname,age,job}){
    console.log(`name: ${firstname} ${lastname}`)
        console.log(`age: ${age}`)
          console.log(`job: ${job}`)
}


const person1 ={
    firstname:"spongeBob",
    lastname:"SquarePants",
    age:30,
    job:"Fry Cook"
}

const person2 ={
    firstname:"Patric",
    lastname:"Star",
    age:32,
}

displayPerdon(person1)

// const {firstname,lastname,age,job="Unemploytes"}=person1;

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job)