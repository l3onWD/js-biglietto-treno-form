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

const underageDiscount = 0.20;// [percentage unit]
const overageDiscount = 0.40;// [percentage unit]


// *** DOM INPUT ELEMENTS ***//
const nameElem = document.getElementById('name');
const tripLengthElem = document.getElementById('trip-length');
const ageElem = document.getElementById('age');
const submitElem = document.getElementById('submit');
const resetElem = document.getElementById('reset');
const errorMessageElem = document.querySelector('#error-message');


// *** DOM TICKET DATA ELEMENTS ***//
const ticketContainerElem = document.getElementById('ticket-container');
const ticketNameElem = document.getElementById('ticket-name');
const ticketOfferElem = document.getElementById('ticket-offer');
const ticketVagonElem = document.getElementById('ticket-vagon');
const ticketCodeElem = document.getElementById('ticket-code');
const ticketPriceElem = document.getElementById('ticket-price');

//! Log Elements
console.log('# Elementi Dom di Input:');
console.log('Name Input: ' + nameElem);
console.log('Trip Length Input: ' + tripLengthElem);
console.log('Age Input: ' + ageElem);
console.log('Submit Button: ' + submitElem);
console.log('Reset Button: ' + resetElem);
console.log('Error Message: ' + errorMessageElem);

console.log('');
console.log('# Elementi Dom del Biglietto:');
console.log('Ticket Container: ' + ticketContainerElem);
console.log('Ticket Name: ' + ticketNameElem);
console.log('Ticket Offer: ' + ticketOfferElem);
console.log('Ticket Vagon: ' + ticketVagonElem);
console.log('Ticket Code: ' + ticketCodeElem);
console.log('Ticket Price: ' + ticketPriceElem);

/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');


// *** SUBMIT CLICK ***//
submitElem.addEventListener('click', function () {


    // *** USER INPUTS ***//
    const nameInput = nameElem.value.trim();
    const tripLengthInput = parseInt(tripLengthElem.value);
    const ageInput = ageElem.value;

    //! Log Inputs
    console.log('# Dati Inseriti:');
    console.log('Nome: ' + nameInput);
    console.log('Lunghezza Viaggio: ' + tripLengthInput);
    console.log('Anni: ' + ageInput);
    

    // *** VALIDATION ***//
    let isValid = true;

    if(nameInput.length < 3 || isNaN(tripLengthInput) || tripLengthInput < 1) {
        isValid = false;
    }

    
    // *** CREATE TICKET ***//
    if(!isValid) {

        // *** SHOW ERROR MESSAGE ***//
        errorMessageElem.innerText = 'I dati inseriti non sono corretti!';
        errorMessageElem.classList.remove('d-none');

        //! Log Error
        console.log("# ERRORE: i dati inseriti non sono corretti!");

    } else {

        // *** HIDE ERROR MESSAGE ***//
        errorMessageElem.innerText = '';
        errorMessageElem.classList.add('d-none');


        // *** CALCULATE PRICE ***//
        // Basic price
        const priceBasic = tripLengthInput * pricePerKm;

        // Calculate discount
        let discount = null;
        if(ageInput === 'underage') discount = underageDiscount;
        else if(ageInput === 'overage') discount = overageDiscount;

        // Calculate final price with discount
        let priceFinal = priceBasic;
        if(discount) priceFinal *= (1-discount);

        // ! Log Price
        console.log('');
        console.log('# Prezzo Biglietto:');
        console.log('Prezzo Base: €' + priceBasic.toFixed(2));
        if(discount) console.log(`Sconto applicato: ${discount * 100}%`);
        console.log('Prezzo Finale: €' + priceFinal.toFixed(2));


        // *** CALCULATE TICKET DATA ***//
        // Ticket Offer
        let ticketOffer = 'Biglietto Standard';
        if(discount === underageDiscount) ticketOffer = 'Biglietto Under 18';
        else if(discount === overageDiscount) ticketOffer = 'Biglietto Over 65';

        // Ticket Vagon
        const minVagon = 1;
        const maxVagon = 8;
        const ticketVagon = Math.floor(Math.random() * (maxVagon + 1 - minVagon)) + minVagon;

        // Ticket Code
        const minCode = 90000;
        const maxCode = 99999;
        const ticketCode = Math.floor(Math.random() * (maxCode + 1 - minCode)) + minCode;


        // *** SHOW TICKET ***//
        // Update data
        ticketNameElem.innerText = nameInput;
        ticketOfferElem.innerText = ticketOffer;
        ticketVagonElem.innerText = ticketVagon;
        ticketCodeElem.innerText = ticketCode;
        ticketPriceElem.innerText = '€' + priceFinal.toFixed(2);

        // Show ticket
        ticketContainerElem.classList.remove('d-none');

    }

    console.log('----------- SUBMIT DONE -----------');
});


// *** RESET CLICK ***//
resetElem.addEventListener('click', function () {

    // *** RESET PAGE DATA ***//
    // Reset inputs
    nameElem.value = '';
    tripLengthElem.value = 1;
    ageElem.selectedIndex = 0;

    // Hide ticket
    ticketContainerElem.classList.add('d-none');

    // ! Log
    console.log('Campi resettati!');

    console.log('----------- RESET DONE -----------');
});