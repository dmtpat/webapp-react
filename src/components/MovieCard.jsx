// import image from "../assets/matrix_reloaded.jpg";
import { useNavigate } from "react-router-dom";

function Card({ movie }) {
    const navigate = useNavigate();
    const { id, title, director, genre, release_year, abstract, image } = movie;
    return (
        <div className="flipCard" key={id}>
            <div className="flipCardInner">
                <div className="flipCardFront">
                    <img src={`./${image}`} alt={title} />
                </div>
                <div className="flipCardBack">
                    <h2>{title}</h2>
                    <p>{director}</p>
                    <p>{genre}</p>
                    <p>{release_year}</p>
                    <p>{abstract}</p>
                    <button className="btn justifySelfBot" onClick={() => navigate(`/movies/${id}`)}>Reviews</button>
                </div>
            </div>
        </div>
    )
}
export default Card
