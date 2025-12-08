async function setName() {
    console.log("3");
    console.log("Name");
    console.log("4")
}

async function getName() {
    console.log("1");
    setName();
    console.log("2");
}

getName();
