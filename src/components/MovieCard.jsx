// import image from "../assets/matrix_reloaded.jpg";
import { useNavigate } from "react-router-dom";

function Card({ movie }) {
    const connection = `http://localhost:3000/image/`
    const navigate = useNavigate();
    const { id, title, director, genre, release_year, abstract, image } = movie;
    return (

        <div className="flipCardInner">
            <div className="flipCardFront">
                <img src={connection + image} alt={title} />
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

    )
}
export default Card
