function myDefFunc(name: string, age: number = 20) {
    return `Your name is ${name} and your age is ${age}.`;
}

const emp1: string = myDefFunc("Vansh");
console.log(emp1);

function myOptFunc(name: string, age?: number) {
    if (age) {
        return `Your name is ${name} and your age is ${age}.`;
    }
    return `Your name is ${name}`;
}

const emp2: string = myOptFunc("Vansh");
console.log(emp2);

const emp3: string = myOptFunc("Vansh", 20);
console.log(emp3);  