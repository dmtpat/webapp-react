import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard"

function MoviesListPage() {
    const navigate = useNavigate();
    return (
        <main>
            <div className="boxed moviesList">
                <h1>Lista dei film!</h1>
                <div className="moviesContainer">
                    <MovieCard />
                </div>
            </div>
        </main>
    )
}

export default MoviesListPage
{/* <button className="btn" onClick={() => navigate("")}>Vai alla lista dei film!</button> */ }