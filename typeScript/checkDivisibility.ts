function isDivisibleBy4And8( num: number ): boolean {
    return num % 4 === 0 && num % 8 === 0;
}

console.log(isDivisibleBy4And8(834));
console.log(isDivisibleBy4And8(3434));
console.log(isDivisibleBy4And8(456));
console.log(isDivisibleBy4And8(64));
console.log(isDivisibleBy4And8(786));
console.log(isDivisibleBy4And8(85));
console.log(isDivisibleBy4And8(96));


let bigNumber: bigint = 345728436n;
let anotherBigNumber: bigint = 3457368436n;

let sum = bigNumber + anotherBigNumber;
let difference = bigNumber - anotherBigNumber;
let product = bigNumber * anotherBigNumber;
let division = bigNumber / anotherBigNumber;

console.log(sum);
console.log(difference);
console.log(product);
console.log(division);
