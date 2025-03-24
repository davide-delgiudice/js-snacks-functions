/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function choiceLetter(text) {
    let newArray = [];

    for(let i=0; i<text.length; i++){
        const firstLetter = text[i];
        console.log(firstLetter);

        if(firstLetter[0] === "A") {
            newArray.push(text[i]);
        }
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console

let result = choiceLetter(names);
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]