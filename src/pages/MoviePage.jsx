import { useParams } from "react-router-dom";

function MoviePage() {
    const { id } = useParams();
    return (
        <main>
            <div className="boxed">
                <h1>Pagina di dettaglio del film con indice {id}</h1>
            </div>
        </main>
    )
}
export default MoviePage