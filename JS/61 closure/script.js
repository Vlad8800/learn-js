document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

// function outer(){
//     let message ="Hello, World!";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// massage="Goodbye, World!";
// outer();

function createcounter(){
let count=0;

function increment(){
    
    count++;
    console.log(count);
}
function getCount(){
return count;
}
return{increment,getCount}
}
const counter=createcounter();
counter.increment();
counter.increment();
counter.increment();

counter.count =0;
console.log(counter.getCount());


function createGame(){
let score=0;

function increaseScore(points){
    score+=points;
    console.log(`+${score} points`);
}

function decreaseScore(points){
    score-=points;
    console.log(`-${score} points`);
}

function getScore(){
    return score;
}

return{increaseScore,decreaseScore,getScore}
}

const game=createGame();
game.increaseScore(10);
game.decreaseScore(5);
console.log(`Current score: ${game.getScore()} points`);