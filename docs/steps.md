# Calcolo del costo del biglietto del treno tramite form

<br>

## Steps:

- Recuperare gli elementi del DOM (3 inputs e 1 bottone)
- [milestone 2] Recuperare gli altri elementi del DOM (dati biglietto)
- Aggiungere un event listener al bottone SUBMIT
- **QUANDO** _"il bottone SUBMIT viene cliccato"_
    - Recuperare i dati dell'utente inseriti nel form (nome, lunghezza tragitto, età)
    - **SE** _"i dati non sono validi"_
        - Stampare un messaggio d'errore
        - [milestone 2] Mostrare un messaggio d'errore
        - **FINE**
    - **ALTRIMENTI**
        - Calcolare il prezzo base
        - **SE** _"l'età è inferiore a 18 anni"_
        - [bonus select] **SE** _"l'età è uguale a MINORENNI"_
            - Calcolare lo sconto minorenni
        - **SE INVECE** _"l'età è superiore o uguale a 65 anni"_
        - [bonus select] **SE INVECE** _"l'età è uguale a OVER 65"_
            - Calcolare lo sconto over 65
        - Calcolare il prezzo finale
        - Stampare il risultato in console
        - [bonus] Calcolare il numero della carrozza random
        - [bonus] Calcolare il codice del biglietto random
        - [milestone 2] Aggiornare i dati del biglietto
        - [milestone 2] Mostrare il biglietto
        - **FINE**
- Aggiungere un event listener al bottone RESET
- **QUANDO** _"il bottone RESET viene cliccato"_
    - Svuotare tutti i dati degli inputs
    - Nascondere il biglietto
    - **FINE**