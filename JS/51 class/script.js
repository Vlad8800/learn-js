document.getElementById('myBtn').addEventListener('click', function() {
    alert('Button clicked!');
});

class Product{
    constructor(name, price){
        this.name =name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product ${this.name} cost $ ${this.price.toFixed(2)}`)
       
    }
    calculateTotal(salesTax){
        return this.price +(this.price*salesTax)
    }
}
const salesTax = 0.05;
const Product1 = new Product("Shirt",19.9999);

const Product2 = new Product("Pants",19.99);

Product1.displayProduct()
Product2.displayProduct()

const total=Product1.calculateTotal(salesTax);
console.log(`Tatol price (with tax):${total.toFixed(2)}`);