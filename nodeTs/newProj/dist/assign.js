"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderCallback(items, done) {
    console.log(`Order placed: ${items.join(", ")}`);
    setTimeout(() => {
        console.log("Preparing...");
        setTimeout(() => {
            console.log("Ready!");
            setTimeout(() => {
                console.log("Paid");
                setTimeout(() => {
                    console.log("Picked up. Enjoy!\n");
                    done();
                }, 500);
            }, 1000);
        }, 2000);
    }, 500);
}
function orderPromise(items) {
    return new Promise(resolve => {
        console.log(`Order placed: ${items.join(", ")}`);
        setTimeout(() => {
            console.log("Preparing...");
            setTimeout(() => {
                console.log("Ready!");
                setTimeout(() => {
                    console.log("Paid");
                    setTimeout(() => {
                        console.log("Picked up. Enjoy!\n");
                        resolve();
                    }, 1000);
                }, 2000);
            }, 2000);
        }, 500);
    });
}
async function orderAsync(items) {
    console.log(`Order placed: ${items.join(", ")}`);
    await new Promise(r => setTimeout(r, 500));
    console.log("Preparing...");
    await new Promise(r => setTimeout(r, 2000));
    console.log("Ready!");
    await new Promise(r => setTimeout(r, 2000));
    console.log("Paid");
    await new Promise(r => setTimeout(r, 1000));
    console.log("Picked up. Enjoy!\n");
}
orderCallback(["Burger", "Pizza"], () => console.log("Callback done\n"));
// orderPromise(["Pizza"]).then(() => console.log("Promise done\n"));
// (async () => {
//     await orderAsync(["Pasta"]);
//     console.log("Async/Await done\n");
// })();
