import MovieTitleCard from "./MovieTitleCard";
import MovieBodyCard from "./MovieBodyCard";

export default function MovieCard(props){
      
  return(
    <main>
      <div className="movieCard">
        <MovieTitleCard 
          img={props.img}
          title={props.title}
        />
        <MovieBodyCard
          genre={props.genre}
          rating={props.rating}
          director={props.director}
          actors={props.actors}
        />
      </div>
    </main>
  );
}
