document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

const store = new Map([
["t-shirt",20],
["jeans",30],
["socks",10],
["underwear",50],
]);

let shoppingCart=0;
store.set("hat",40);
store.delete("hat")
console.log(store.has("hat"));

console.log(store.size)


shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
//shoppingCart += store.get("hat");
console.log(shoppingCart);

store.forEach((value,key)=> console.log(`${key} $${value}`));

