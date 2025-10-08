export default function MovieTitleCard(props) {
  return(
    <div className="movieTitleCard">
      <img src={props.img} alt="movieImg" />
      <h3>{props.title}</h3>
    </div>
  );
}