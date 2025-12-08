function myDefFunc(name, age) {
    if (age === void 0) { age = 20; }
    return "Your name is ".concat(name, " and your age is ").concat(age, ".");
}
var emp1 = myDefFunc("Vansh");
console.log(emp1);
function myOptFunc(name, age) {
    if (age) {
        return "Your name is ".concat(name, " and your age is ").concat(age, ".");
    }
    return "Your name is ".concat(name);
}
var emp2 = myOptFunc("Vansh");
console.log(emp2);
var emp3 = myOptFunc("Vansh", 20);
console.log(emp3);
