async function getName() {
    console.log("getName Started");
    
    console.log("getName ended");
}

function caller1() {
    console.log("caller1 started")
    getName();
    console.log("caller1 ended");
}

function caller2() {
    console.log("caller2 started")
    getName();
    console.log("caller2 ended");
}

function caller3() {
    console.log("caller3 started")
    getName();
    console.log("caller3 ended");
}