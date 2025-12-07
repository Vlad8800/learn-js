document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`)
    }
     sleep(){
        console.log(`This ${this.name} is eating`)
    }
}

class Rabbit extends Animal{
    name ="rabbit";
    run(){
     console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal{
    name ="fish";
     swim(){
     console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal{
    name ="Hawk";
     fly(){
     console.log(`This ${this.name} is flying`)
    }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

fish.alive =false;
console.log(fish.alive)

rabbit.eat();
rabbit.sleep();
rabbit.run();
fish.swim();
hawk.fly();