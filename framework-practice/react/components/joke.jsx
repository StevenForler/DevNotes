
export default function Joke({rating, dadJoke}) {

    let stars = ""
    for (let i = 0; i < 5; i++){
        if (i < rating ) {
            stars += "⭐"
        } else {
            stars += "☆"
        }
    }
    return (
        <div>
            <p>{dadJoke}</p>
            <p>{stars}</p>
        </div>
    )
}
