document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

const fruits=[{name:"apple", color:"red",calories:95},
              {name:"orange", color:"orange",calories:45},
              {name:"banana", color:"yellow",calories:105},
              {name:"coconut", color:"white",calories:159},
              {name:"pinaple", color:"yellow",calories:37}];


 //console.log(fruits[3].name)

//  fruits.push({name:"grapes", color:"green", calories: 65})
// fruits.pop();

// fruits.splice(1,2);
//  console.log(fruits)

// fruits.forEach(fruits => console.log(fruits.color))

// const fruitNames = fruits.map(fruits =>fruits.name)
// const fruitColors = fruits.map(fruits =>fruits.color)

// console.log(fruitNames);
// console.log(fruitColors);

// const yellowfruits = fruits.filter(fruits => fruits.color === "yellow")
// const lowCalFruits = fruits. filter(fruits =>fruits.calories<100)


// console.log(yellowfruits)
// console.log(lowCalFruits)

const maxFruit = fruits.reduce((max,fruits) => fruits.calories> max.calories ? 
                                                fruits:max);
console.log(maxFruit);
