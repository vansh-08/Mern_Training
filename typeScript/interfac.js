// create an interface named Products with properties name price and quantity
var Product = {
    name: "vAnsh",
    price: 20,
    quantity: 1
};
console.log(Product);
var calculateTotalPrice = function (prod) {
    return "Calculated price: ".concat(prod.price * prod.quantity);
};
console.log(calculateTotalPrice(Product));
