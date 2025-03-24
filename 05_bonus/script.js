/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const myName = 'Mario';

// Dichiara la funzione qui.

function dayTime(greet){
    const d = new Date();
    let hour = d.getHours();
    console.log(`Sono le ${hour}`)

    if(hour < 13){
        console.log(`Buongiorno ${greet}`)
    }
    else if (hour < 17){
        console.log(`Buon pomeriggio ${greet}`)
    }
    else if (hour > 17){
        console.log(`Buonasera ${greet}`)
    }
}

// Invoca la funzione qui e stampa il risultato in console

let t = dayTime(myName);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.