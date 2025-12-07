document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

// class MathUtil{
//     static PI = 3.14159;
    
//     static getDiameter(radius){
//         return radius*2;
//     }
//      static getcsitcumference(radius){
//         return 2* this.PI* radius;
//     }
// static getArea(radius){
// return this.PI*radius*radius;
// }

// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(40));
// console.log(MathUtil.getcsitcumference(10));
// console.log(MathUtil.getArea(10));

class User{
    static userCount=0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`)
    }
    sayHello(){
        console.log(`Hello, my name is`+ this.username)
    }
}

const user1 = new User("SpongeBob")

const user2 = new User("Patric")

console.log(user1.username);
console.log(user2.username);
console.log(User.userCount);
user1.sayHello()
User.getUserCount()