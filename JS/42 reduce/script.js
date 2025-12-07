document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});
let  prices = [10, 20, 30, 40, 50];
let total = prices.reduce(CheckOut)

console.log(total);

function CheckOut(total , element) {
 return total + element;
 
}
