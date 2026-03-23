# webapp-react 

Iniziamo a realizzare il frontend che visualizzerà i dati della nostra webapi.

## MILESTONE 0
- Ragionate sulla struttura dell'applicazione che volete realizzare:
    -  Di quali e quante pagine ho bisogno? 
    - Avranno bisogno di qualche componente? 
    - Ci sono componenti riutilizzabili più volte? 
    - Di quali props hanno bisogno? 
Iniziate a immaginare il risultato finale prima di scrivere una sola riga di codice.

## MILESTONE 1
- Avviate un nuovo progetto React con Vite
- Ripuliamo lo scaffold da file e codice di esempio non necessari
- Assicuriamoci che tutto funzioni

## MILESTONE 2
- Installiamo React Router
- Creiamo un layout di base per la nostra applicazione
- Creiamo almeno 2 pagine: una in cui mostrare la lista dei film e una in cui vederne il dettaglio (usando l'id come parametro)
- Impostiamo le rotte per le diverse pagine

## MILESTONE 3
- Nella pagina con l'elenco dei film prepariamo il layout per accogliere una Card del film.
- Realizziamo il componente della Card, che dovrà accettare il film tramite Props
- Nella pagina prepariamo un oggetto con la stessa struttura di un film e passiamolo al componente card
- MINI-BONUS: potete preparare un array in cui ripetere più volte lo stesso film, o addirittura film diversi. Non perdeteci troppo tempo, martedì prenderemo i dati dalle webapi!
La card dovrà avere anche un link che riporti a /movies/id

### BONUS
- Nella pagina con il dettaglio dei film predisponiamo un titolo e una descrizione placeholder.
- Subito sotto ripetiamo il discorso della Card, ma questa volta saranno Card di recensione (voto, autore, testo ecc..)