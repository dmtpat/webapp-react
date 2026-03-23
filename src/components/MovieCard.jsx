import image from "../assets/matrix_reloaded.jpg";

function Card() {
    return (
        <div className="flipCard">
            <div className="flipCardInner">
                <div className="flipCardFront">
                    <img src={image} alt="Avatar" />
                </div>
                <div className="flipCardBack">
                    <h2>Title</h2>
                    <p>Director</p>
                    <p>Genre</p>
                </div>
            </div>
        </div>
    )
}
export default Card