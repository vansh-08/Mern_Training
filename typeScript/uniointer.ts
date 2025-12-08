// type User = {
//     name: string,
//     age: number
// }

// type MyLocation = {
//     city: string,
//     country: string
// }

// const user: User = { name: "vansh", age: 29 };
// const myLocation: MyLocation = { city: "Chandigarh", country: "India" };

// // defined
// const createUserProfile: (user: User, location: MyLocation) => string = (user: User, location: MyLocation): string => {
//     return `my name is ${user.name} and I am living in city: ${location.city}`;
// }

// // call
// console.log(createUserProfile(user, myLocation));


type User = {
    name: string,
    age: number
}

type MyLocation = {
    city: string,
    country: string
}

const user: User = { name: "vansh", age: 29 };
const myLocation: MyLocation = { city: "Chandigarh", country: "India" };

// defined
const createUserProfile: (user: User, myLocation: MyLocation) => string = (user: User, myLocation: MyLocation): string => {
    return `My name is ${user.name} and I am living in ${myLocation.country}`;
}

// call
console.log(createUserProfile(user, myLocation));