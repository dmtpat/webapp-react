# webapp-react 

## PT I
Iniziamo a realizzare il frontend che visualizzerà i dati della nostra webapi.

### MILESTONE 0
- Ragionate sulla struttura dell'applicazione che volete realizzare:
    -  Di quali e quante pagine ho bisogno? 
    - Avranno bisogno di qualche componente? 
    - Ci sono componenti riutilizzabili più volte? 
    - Di quali props hanno bisogno? 
Iniziate a immaginare il risultato finale prima di scrivere una sola riga di codice.

### MILESTONE 1
- Avviate un nuovo progetto React con Vite
- Ripuliamo lo scaffold da file e codice di esempio non necessari
- Assicuriamoci che tutto funzioni

### MILESTONE 2
- Installiamo React Router
- Creiamo un layout di base per la nostra applicazione
- Creiamo almeno 2 pagine: una in cui mostrare la lista dei film e una in cui vederne il dettaglio (usando l'id come parametro)
- Impostiamo le rotte per le diverse pagine

### MILESTONE 3
- Nella pagina con l'elenco dei film prepariamo il layout per accogliere una Card del film.
- Realizziamo il componente della Card, che dovrà accettare il film tramite Props
- Nella pagina prepariamo un oggetto con la stessa struttura di un film e passiamolo al componente card
- MINI-BONUS: potete preparare un array in cui ripetere più volte lo stesso film, o addirittura film diversi. Non perdeteci troppo tempo, martedì prenderemo i dati dalle webapi!
La card dovrà avere anche un link che riporti a /movies/id

#### BONUS
- Nella pagina con il dettaglio dei film predisponiamo un titolo e una descrizione placeholder.
- Subito sotto ripetiamo il discorso della Card, ma questa volta saranno Card di recensione (voto, autore, testo ecc..)

---
## PT II

completiamo la nostra applicazione collegando il frontend React al backend Express che restituisce in json i dati del DB.

### MILESTONE 1
Installate il pacchetto cors sull'applicazione express webapp-express
Importate, configurate e abilitate il CORS per l'indirizzo su cui gira la vostra applicazione React
Mini-bonus: impostate l'indirizzo del frontend nel file .env invece che schiantato a mano in stringa

### MILESTONE 2
Spostiamoci su webapp-react. Nella pagina con la lista dei film aggiungiamo una chiamata axios per recuperarli dalla nostra web-api, stampandoli in console
Se tutto funziona, spostiamo i dati in uno state su cui iteriamo per generare le cards dei film

### MILESTONE 3
Come la milestone precedente, ma per recuperare il dettaglio del singolo film (titolo, autore, ecc..)
Una volte stampati in pagina i dati del film, procedete a generare dinamicamente le card delle recensioni. Prima verificate che la vostra web-api restituisca quel dato (v. postman e/o console.log)
Mini-bonus: attenzione alle dipendenze dello useEffect

#### BONUS
Caricate le immagini nel public del backend, ma visualizzatele da React
Super-bonus: nel controller che recupera i dati del singolo film modificate la query per restituire anche la media delle relative recensioni. Vi serviranno una join e la funzione AVG: componete prima la query funzionante su Workbench (es. per id=3) e poi vi spostate su express parametrizzando l'id.
Migliorate il layout come credete

NOTE:
Ricordatevi che dovrete lavorare con due VS Code aperti ognuno su un un progetto (express e react) e lanciare i relativi server di sviluppo
Nel live coding pushato mancano le key quando si itera su qualcosa.map. Per far scomparire il warning assicuratevi di iterare correttamente. I vostri dati hanno un id 
---
## PT III

### Milestone 1 - backend
- Predisponiamo un nuovo endpoint nella webAPI per salvare nel database una nuova recensione legata ad un film
- Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione

### Milestone 2 - frontend
- Creiamo un componente che contenga il form per le recensioni
- Inseriamo questo componente nella pagina di dettaglio del film
- All'invio del form evitiamo il reload della pagina e stampiamo in console tutti i dati presenti nel form (e l'id del film)
- Disattiviamo lo strict mode
- Se tutto funziona, usiamo questi dati per inviarli alla webapi tramite axios

### milestone 3 - frontend
- A inserimento avvenuto, chiamiamo dal componente del form un metodo del padre, per recuperare nuovamente i dettagli del movie
- Testiamo tutto, riattiaviamo strict mode

#### Bonus 
- Inseriamo una validazione nel form di recensione. Possiamo usarla per attivare/disattivare il bottone di submit o per aggiungere dei bordi verde/rosso alle input, verificando con una funzione che i dati nello state rispettino alcune condizioni