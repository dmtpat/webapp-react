// import image from "../assets/matrix_reloaded.jpg";
import { useNavigate } from "react-router-dom";

function Card({ movie, id }) {
    const navigate = useNavigate();
    const { title, director, genre, release, abstract, image } = movie;
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
                    <button className="btn justifySelfBot" onClick={() => navigate(`/movies/${id}`)}>Dettagli</button>
                </div>
            </div>
        </div>
    )
}
export default Card
