/*
Scrivere un programma che chieda all’utente:
- Il proprio nome
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.   La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

BONUS:
- Randomizzare un numero per la carrozza dell'utente
- Randomizzare un numero per il codice del biglietto
- Utilizzare una <select> invece di un <input> per determinare l'età dell'utente
- Implementare il reset del form tramite un bottone di reset
*/

/* -----------------------------------------
! DEBUG
-------------------------------------------*/
console.log('----------- DEBUG -----------');

console.log('JS OK!');// Check if JS is linked to the page


/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');

// *** TICKET DATA ***//
const pricePerKm = 0.21;// [€]

const underageLimit = 18;// [years]
const underageDiscount = 0.20;// [percentage unit]
const overageLimit = 65;// [years]
const overageDiscount = 0.40;// [percentage unit]


// *** DOM ELEMENTS ***//
const nameElem = document.getElementById('name');
const tripLengthElem = document.getElementById('trip-length');
const ageElem = document.getElementById('age');
const submitElem = document.getElementById('submit');

//! Log Elements
console.log('# Elementi Dom:');
console.log('Name Input: ' + nameElem);
console.log('Trip Length Input: ' + tripLengthElem);
console.log('Age Input: ' + ageElem);
console.log('Submit Button: ' + submitElem);

/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');


// *** SUBMIT CLICK ***//
submitElem.addEventListener('click', function () {

    // *** USER INPUTS ***//
    const nameInput = nameElem.value.trim();
    const tripLengthInput = parseInt(tripLengthElem.value);
    const ageInput = parseInt(ageElem.value);

    //! Log Inputs
    console.log('# Dati Inseriti:');
    console.log('Nome: ' + nameInput);
    console.log('Lunghezza Viaggio: ' + tripLengthInput);
    console.log('Anni: ' + ageInput);
    

});



console.log('----------- DONE -----------');