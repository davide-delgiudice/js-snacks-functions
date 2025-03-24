/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function letters(string) {
    let newArray = [];

    for(i=0; i<string.lenght; i++){
        let words = string.split('');

        const firstWords = words.charAT(0).toUpperCase();

        const restofWords = words.substring(1);

        const newArray = firstWords.push(newArray); 
    }

    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

let result = letters(names);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]