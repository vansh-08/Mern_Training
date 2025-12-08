let isPalin = (palin: string): boolean => {
    let pali = palin.split("").reverse().join("");
    return pali === palin;
}

console.log(isPalin("123211"));
console.log(isPalin("12321"));

let seasaw: any = "jira";
console.log(seasaw);
seasaw = 5;
console.log(seasaw);
seasaw = true;
console.log(seasaw);
seasaw = 9234.234;
console.log(seasaw);


let seasa: unknown = "jira";
console.log(seasa);
seasa = 5;
console.log(seasa);
seasa = true;
console.log(seasa);
seasa = 9234.234;
console.log(seasa);
