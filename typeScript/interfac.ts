// create an interface named Products with properties name price and quantity

interface Products {
    name: string;
    price: number;
    quantity: number;
}

const Product: Products = {
    name: "vAnsh",
    price: 20,
    quantity: 1
}

console.log(Product);

const calculateTotalPrice = (prod: Products): string => {
    return `Calculated price: ${prod.price * prod.quantity}`
}

console.log(calculateTotalPrice(Product));
