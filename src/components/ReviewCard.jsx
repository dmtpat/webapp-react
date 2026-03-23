

function ReviewCard({ review }) {
    const { id, movie_id, name, vote, text, created_at } = review;
    const reviewDate = created_at.split("T")[0];
    return (
        <div className="reviewCard staticCard" key={id}>
            <h2>{name}<span> {reviewDate}</span></h2>
            <span>{vote}</span><span> -stelline- </span>
            <p>{text}</p>
        </div>
    )
}

export default ReviewCard