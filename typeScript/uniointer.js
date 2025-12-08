// type User = {
//     name: string,
//     age: number
// }
var user = { name: "vansh", age: 29 };
var myLocation = { city: "Chandigarh", country: "India" };
// defined
var createUserProfile = function (user, myLocation) {
    return "My name is ".concat(user.name, " and I am living in ").concat(myLocation.country);
};
// call
console.log(createUserProfile(user, myLocation));
