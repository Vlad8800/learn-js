document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

// class Rectangle{


//     constructor(width,height){
//         this.width = width;
//         this.height = height;     
//     }

//  set width(newWidth){
//  if(newWidth>0){
//  this._width = newWidth;
// }
//  else{
//     console.log("Width must be a possitive number")
// }
//     } 
//     get width(){
//         return this._width
//     }
//  set height(newHeight){
//   if(newHeight>0){
//  this._height = newHeight;
//  }
//  else{
//     console.log("Height must be a possitive number")
// }
//     }
   
//         get height(){
//         return this._height
//     }
//     get area(){
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(3,4);
// rectangle.width=5;
// rectangle.height=6;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area)


class Person{
    constructor(firstName,lastName,age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
set firstName(newFirstName){
    if(typeof newFirstName =="string" && newFirstName.length>=0){
        this._firstName = newFirstName;
    }else{
        console.log("Fisrtname must be a non-empy string")
    }
}
set lastName(newLastName){
    if(typeof newLastName =="string" && newLastName.length>=0){
        this._lastName = newLastName;
    }else{
        console.log("Lastname must be a non-empy string")
    }
}
set age(newAge){
    if(typeof newAge ==="number" && newAge >= 0){
        this._age = newAge;
    }else{
        console.log("Age must be a non-empy number")
    }
}

get firstName()
{
    return this._firstName;
}
get lastName()
{
    return this._lastName;
}
get age(){
     return this._age;
}
}
const person = new Person("SpongeBob", "Squerepants", 30);

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)