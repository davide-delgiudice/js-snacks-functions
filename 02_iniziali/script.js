/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function letters(text) {
    let newArray = [];

    for(i=0; i<text.lenght; i++){

        const name = text[i];

        newArray.push(name[0]);

    }

    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

let result = letters(names);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]