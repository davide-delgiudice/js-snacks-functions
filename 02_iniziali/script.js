/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function letters(text) {
    let newArray = [];

    for(let i=0; i<text.length; i++){
        const name = text[i];
        console.log(name);

        newArray.push(name[0]);
    }

    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

let result = letters(names);
console.log(result);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


// Bonus arrow function

const lettersA = (textA) => {
    let newArrayA = [];

    for(let i=0; i<textA.length; i++){
        const nameA = textA[i];
        console.log(nameA);

        newArrayA.push(nameA[0]);
    }

    return newArrayA;
}


const namesA = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

let resultA = lettersA(namesA);
console.log(resultA);
