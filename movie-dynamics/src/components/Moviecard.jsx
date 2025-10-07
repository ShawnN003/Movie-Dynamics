export default function Moviecard(props){
    let actorsList = props.actors;
    const actors = actorsList.map((actor) => (
        <li>{actor}</li>
    )

    
)
    return(
        <main>
            <img src={props.poster} alt="movieImg" />
            <h2>{props.title}</h2>
            <p>{props.genre}</p>
            <p>{props.rating}</p>
            <p>{props.director}</p>
            <ul>{actors}</ul>
        </main>
    )
}
