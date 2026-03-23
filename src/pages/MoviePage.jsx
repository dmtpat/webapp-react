import { useParams } from "react-router-dom";
import movies from "../data/moviesData"
import ReviewCard from "../components/ReviewCard";
import reviews from "../data/reiewsData"

function MoviePage() {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id == Number(id));
    const movieReviews = reviews.filter(review => review.movie_id == id);
    return (
        <main>
            <div className="boxed">
                <h2>Pagina di dettaglio</h2>
                <h1>{movie.title}</h1>
                <div className="movieDetails">
                    <div className="detailsHeader">
                        <img src={`../${movie.image}`} alt={movie.title} />
                    </div>
                    <div className="detailsText">
                        <p>Regista: <strong>{movie.director}</strong> </p>
                        <p>Anno di uscita: <strong>{movie.release_year}</strong></p>
                        <p>Genere: <strong>{movie.genre}</strong></p>
                        <p>Trama: <strong>{movie.abstract}</strong></p>
                    </div>
                    <div className="reviewsContainer">
                        {
                            movieReviews.map(review => {
                                return <ReviewCard review={review} />
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MoviePage