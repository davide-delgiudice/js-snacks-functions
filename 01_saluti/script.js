/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function acceptName(name) {
    name = (`Ciao ${name}`);
    return name;
}

// Invoca la funzione qui e stampa il risultato in console

let chosenName = acceptName(userName);
console.log(chosenName);

//Risultato atteso se si passa 'Mario': // ciao Mario
