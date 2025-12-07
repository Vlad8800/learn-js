// document.getElementById('myBtn').addEventListener('click', function() {
//     alert('Button clicked!');
// });
// const Person = {
//     fullNAme:"Spongebob, SquarePants",
//     age:30,
//     isStudent:true,
//     hobbies:["karate","jellyfishing","cooking"],
//     address:{
//         street:"124 Conch St.",
//         city:"Bicini Bottom",
//         country:"Int. Water",
//     }
// }
// console.log(Person.fullNAme);
// console.log(Person.age);
// console.log(Person.isStudent);
// console.log(Person.address.street)
// console.log(Person.hobbies[1])
//
// for(const property in Person.address){
//     console.log(Person.address[property])
// }
class Person{
    constructor(name,age, ...address){
      this.name = name;
      this.age = age;
      this.address = new Address(...address)
    }
}
class Address{
    constructor(street,city,country){
        this.street =street;
        this.city = city;
        this.counry = country;
    }
}
const person1 = new Person("SpongeBob",30,
    "124 Conch St.","Bicini Bottom","Int. Water");

const person2 = new Person("Patric",32,
    "126 Conch St.","Bicini Bottom","Int. Water");

const person3 = new Person("Squidwars",47,
    "125 Conch St.","Bicini Bottom","Int. Water");

    console.log(person1.name)
       console.log(person1.age) 
        console.log(person1.address.city) 