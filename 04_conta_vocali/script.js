/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function numVocali(vocale){
    let valore = parseInt(0);

    for(i=0; i<vocale.length; i++){
        if (['a',  'e', 'i', 'o', 'u'].includes(vocale[i])){
            valore++;
        }
    }
    
    return valore;
}

// Invoca la funzione qui e stampa il risultato in console

let result = numVocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)