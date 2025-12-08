// SubString

let longText: string = "Hello There! How are you..?";
let shortText: string = longText.substring(0, 10);
console.log(longText);
console.log(shortText);


// str comparison

let str1: string = "Chacha Wow";
let str2: string = "Googli Moogli Woosh";
let result: boolean = str1 == str2;
console.log(str1);
console.log(str2);
console.log(result);


// str template

let product: string = "Polo T-Shirt";
let price: number = 4965;
let details: string = `The product ${product} is priced at ${price} dollars.`;
console.log(product);
console.log(price);
console.log(details);       