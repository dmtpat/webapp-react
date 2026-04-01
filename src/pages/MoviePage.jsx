import { useParams } from "react-router-dom";
// import movies from "../data/moviesData"
import ReviewCard from "../components/ReviewCard";
// import reviews from "../data/reiewsData"
import { useState, useEffect } from "react";
import axios from "axios";

import FormReview from "../components/FormReview"

function MoviePage() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`).then(
            res => {
                console.log(res.data);
                setMovie(res.data);
            }).catch(err => console.error(err.message));
    }, [id]);
    const connection = `http://localhost:3000/image/`
    return (
        <main>
            <div className="boxed">
                <h2>Pagina di dettaglio</h2>
                <h1>{movie.title}</h1>
                <div className="movieDetails">
                    <div className="detailsHeader">
                        <img src={connection + movie.image} alt={movie.title} />
                    </div>
                    <div className="detailsText">
                        <p>Regista: <strong>{movie.director}</strong> </p>
                        <p>Anno di uscita: <strong>{movie.release_year}</strong></p>
                        <p>Genere: <strong>{movie.genre}</strong></p>
                        <p>Trama: <strong>{movie.abstract}</strong></p>
                    </div>
                    <div className="reviewsContainer">
                        <p>Media delle recensioni:{movie.avg}</p>
                        {
                            movie.reviews?.map((review, i) => {
                                return <div key={i}> <ReviewCard review={review} /></div>
                            })
                        }
                    </div>
                    <div className="newReview">
                        <FormReview movieId={id} />
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MoviePage