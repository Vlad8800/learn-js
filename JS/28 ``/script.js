document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

 let userName ="Vlad";
 let item=3;
 let total = 75;

// console.log("Hello " + userName);
// console.log("You have " + item + " items in your cart");
// console.log("Your total is $" + total);

// console.log(`Hello ${userName}`);
// console.log(`You have  ${item}  items in your cart`);
// console.log(`Your total is $${total}`);


let text = 
`Hello ${userName}
You have  ${item}  items in your cart
Your total is $${total}`;

console.log(text);
document.getElementById("myLabel").innerText = text;