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

//switch
function calculatrice(a, b, signe) {
    switch (signe)
    {
    case "addition" :
        return a + b;
    case "soustraction" :
        return a - b;
    default:
        break;
    }
  }


//do while
var i = 0
do {
    console.log(i);
    i++;
}
while (i < 4) ;
console.log("fin de boucle");


//tableau (array)
var cars = ["renault", "audi", "hyundai"];
for (let pointer = 0; pointer < cars.length; pointer++) {
    console.log(cars[pointer]);
    console.log(pointer);
}



for (let pointer = cars.length - 1;  pointer >= 0; pointer--) {
    console.log(cars[pointer]);
}

console.log(cars.join(', '));
console.table(cars);
console.log(cars.shift());
cars.push("mazda");
cars.pop();
console.log(cars.pop());
console.log(cars.includes("ilbt"));



*/


var notes = [10, 12, 15, 20];

function somme(tab) {
    var somme = 0;
    for (let i = 0; i < tab.length; i++) {
        somme = somme + tab[i];
    }
    return somme;
}

console.log(somme(notes));

// var moyenne = somme / notes.length