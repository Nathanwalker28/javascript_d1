var color = "red";
let name = "rasoa";
const vitesse = "10km/H"

/*function preparing() {
    // console.log("misakafo");
    return "GO";
}


//fonction anonyme
var addition = (a, b) => {
    return a + b;
}

var mutliplication = (a, b) => {
    return a * b;
}

var soustraction = (a, b) => {
    return a - b; 
}

var division = (a, b) => {
    return a / b;
}

/* function addition(a, b) {
    return a + b;
} 

function mutliplication(a, b) {
    return a * b;
}

function soustraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
} 

console.log(addition(1, 2));
console.log(mutliplication(1, 2));
console.log(soustraction(1, 2));
console.log(division(1, 2));
//console.log(color, name, vitesse);
//console.log(preparing()); */

//condition if, while, (switch, case)
/*
if ("blue" === "red") {
    console.log("True");
} else {
    console.timeLog("False");
}
 */

function calculatrice(a, b, signe){
    if (signe === "+") {
        return a / b;
    }

    if (signe === "*") {
        return a * b;
    }

    if (signe === "/") {
        return a / b;
    }

    if (signe === "-") {
        return a - b;
    }
}