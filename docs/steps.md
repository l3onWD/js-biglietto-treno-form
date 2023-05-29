# Calcolo del costo del biglietto del treno tramite form

<br>

## Milestone 1:

- Recuperare gli elementi del DOM (3 inputs e 1 bottone)
- Rimanere in ascolto del _"click del bottone"_
    - Recuperare i dati dell'utente inseriti nel form (nome, lunghezza tragitto, età)
    - SE NON _"i dati sono validi"_
        - Stampare un messaggio d'errore
    - ALTRIMENTI
        - Calcolare il prezzo base
        - SE _"l'età è inferiore a 18 anni"_
            - Calcolare lo sconto minorenni
        - ALTRIMENTI SE _"l'età è superiore o uguale a 65 anni"_
            - Calcolare lo sconto over 65
        - Calcolare il prezzo finale
        - Stampare il risultato in console

## Milestone 2
- Recuperare gli altri elementi del DOM (dati biglietto)
- Rimanere in ascolto del _"click del bottone"_
    - SE NON _"i dati sono validi"_
        - Mostrare un messaggio d'errore
    - ALTRIMENTI
        - ...
        - Aggiornare i dati del biglietto
        - Mostrare il biglietto