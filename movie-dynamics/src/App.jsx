import Header from './components/Header.jsx'
import Movie from './components/Moviecard.jsx'
import Footer from './components/Footer.jsx'
import list from "./movies.js"

const movieList = list.map((movie) => {
  return (
      <Movie
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
