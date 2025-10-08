import Header from './components/Header.jsx'
import MovieCard from './components/MovieCard.jsx'
import Footer from './components/Footer.jsx'
import list from "./movies.js"
list.sort((a, b) => a.title.localeCompare(b.title));

const movieList = list.map((movie) => {
  return (
      <MovieCard
          img={movie.poster}
          title={movie.title}
          genre={movie.genre}
          rating={movie.rating}
          actors={movie.actors} 
      />
  )
})

function App() {
  return (
    <>
      <Header/ >
        <main>
          {movieList}
        </main>
      <Footer/ >
    </>
  )
}

export default App