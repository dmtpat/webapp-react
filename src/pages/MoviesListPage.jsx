import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard"
// import movies from "../data/moviesData";
import axios from "axios";

function MoviesListPage() {
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(
            res => {
                console.log(res.data);
                setMovies(res.data);
            }).catch(err => console.error(err.message));
    }, []);

    return (
        <main>
            <div className="boxed moviesList">
                <h1>Lista dei film!</h1>
                <div className="moviesContainer">
                    {movies.map((movie, index) => {
                        return <MovieCard movie={movie} />
                    })}

                </div>
            </div>
        </main>
    )
}

export default MoviesListPage
{/* <button className="btn" onClick={() => navigate("")}>Vai alla lista dei film!</button> */ }
{/* <MovieCard /> */ }