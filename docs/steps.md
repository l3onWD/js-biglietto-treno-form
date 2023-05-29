# Calcolo del costo del biglietto del treno tramite form

<br>

## Steps:

- Recuperare gli elementi del DOM (3 inputs e 1 bottone)
- [milestone 2] Recuperare gli altri elementi del DOM (dati biglietto)
- QUANDO _"il bottone SUBMIT viene cliccato"_
    - Recuperare i dati dell'utente inseriti nel form (nome, lunghezza tragitto, età)
    - SE NON _"i dati sono validi"_
        - Stampare un messaggio d'errore
        - [milestone 2] Mostrare un messaggio d'errore
    - ALTRIMENTI
        - Calcolare il prezzo base
        - SE _"l'età è inferiore a 18 anni"_
        - [bonus select] SE _"l'età è uguale a MINORENNI"_
            - Calcolare lo sconto minorenni
        - ALTRIMENTI SE _"l'età è superiore o uguale a 65 anni"_
        - [bonus select] ALTRIMENTI SE _"l'età è uguale a OVER 65"_
            - Calcolare lo sconto over 65
        - Calcolare il prezzo finale
        - Stampare il risultato in console
        - [bonus] Calcolare il numero della carrozza random
        - [bonus] Calcolare il codice del biglietto random
        - [milestone 2] Aggiornare i dati del biglietto
        - [milestone 2] Mostrare il biglietto
- QUANDO _"il bottone RESET viene cliccato"_
    - Svuotare tutti i dati degli inputs