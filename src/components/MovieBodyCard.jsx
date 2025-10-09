export default function MovieBodyCard(props) {
  const actors = props.actors.map((actor) => {
    <li key={actor}>{actor}</li>  
});

  const getEmoji = (rating) => {
    if (rating >= 9) return "⭐⭐⭐⭐";       
    if (rating >= 8.5) return "⭐⭐⭐";     
    if (rating >= 8) return "⭐⭐";       
    return "⭐";        
  }

  return(
    <div className="movieBodyCard">
      <p>{props.genre}</p>
      <p>Rating: {props.rating} {getEmoji(prop.rating)}</p>
      <p>{props.director}</p>
      <ul>{actors}</ul>
    </div>
  );
}