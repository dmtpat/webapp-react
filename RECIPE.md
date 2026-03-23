# Recipe

## reset
Questa è la ricetta per arrivare a ottenere un scffold base per progetti con react su vite. Di seguito i passaggi:
- inizializzare e avviare lo scaffold js+react con ` npm create vite@latest .`
- installare e runnare a parte con `npm install` e `npm run dev` oppure confermare nel terminale efar eseguire le due operazioni in automatico a npm
- Eliminare il contenuto del file readme.md e inserire gli step principali del nostro progetto;
- Eliminare il contenuto nella funzione app e gli import non più necessari;
- Eliminare il file app.css;
- Eliminare il contenuto di index.css e sostituirlo con un reset di pagina, così:
    ```
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        }

        body {
        background-color: #222;
        color: white;
        font-family: sans-serif;
        }
    ```
- eliminare il contenuto della cartella public e spostrci il file vite.svg dalla cartella assets e eliminare il contenuto della cartella;
- cambiare in index.html il collegamento dell'icona nell'Header della pagina con vite.svg;

## avvio app con router e pagine dinamiche 

- Inizzazione di react router con `npm install react-router-dom` nel terminale;
- Creare una base di navigazione tra pagine in app.jsx
    ```
   import { BrowserRouter, Route, Routes } from "react-router-dom";
    import Layout from "./layouts/Layout";
    import Pagina from "./pages/Pagina";
    import NotFound from "./pages/NotFound";

    function App() {

    return (
        <BrowserRouter>
        <Routes>
            <Route Component={Layout}>
            <Route path="/" Component={Pagina} ></Route>
            <Route path="*" Component={NotFound} ></Route>
            </Route>
        </Routes >
        </BrowserRouter >
    )
    }

    export default App
    ```
- creazione delle catelle e dei componenti;
    1. creazione della cartella pages in src con all'interno le nostre due pagine di base, Pagina.jsx e NotFound.jsx, creare una funzione base allinterno delle pagine:
    ```
    //Pagina.jsx
    function Pagina() {
        return (
            <h1>pagina</h1>
        )
    }
    export default Pagina

    //NotFound.jsx
    function NotFound() {
        return (
                <h1>NotFound</h1>
            )
        }
    export default NotFound
    ```
    2. creazione della cartella layouts in src con all'interno il file Layout.jsx;
    3. creazione della cartella components in src in cui saranno inseriti tutti i componenti del nostro progetto;
- creare un componente Header.jsx in components con una base così:
    ```
    import { NavLink } from "react-router-dom";

    function Header() {
        return (
            <header className="header">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/otherPage">Other</NavLink>
            </header>
        )
    }
    export default Header
    ```
    utillizzando il componente di NavLink di react-router;
- Impostiamo la pagina di layout utilizzando il componente di react Outlet e il componente Header precedentemente creato:
    ```
    import { Outlet } from "react-router-dom";
    import Header from "../components/Header"

    function Layout() {
        return (<>
            <Header />
            <Outlet />
        </>
        )
    }

    export default Layout
    ```
