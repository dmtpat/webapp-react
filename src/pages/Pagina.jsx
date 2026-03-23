import { useNavigate } from "react-router-dom";

function Pagina() {
    const navigate = useNavigate();
    return (
        <main>
            <div className="boxed homePage">
                <h1>Benvenuto nell'app di ricerca film!</h1>
                <p>In questa app è possibile visualizzare le informazioni di film come titolo, regista, data di uscita, genere e trama. È inoltre possibile visualizare le recensioni degli utenti.</p>
                <button className="btn filmListLink" onClick={() => navigate("/films")}>Vai alla lista dei film!</button>
            </div>
        </main>
    )
}

export default Pagina