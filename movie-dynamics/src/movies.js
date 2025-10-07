const movies = [
  {
    poster: "https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg",
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
    director: "Frank Darabont",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
    director: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/34sP1R8NQIUg0v0NW9m9hPS1lH1.jpg",
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
    director: "Quentin Tarantino",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
    director: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/6FzGnmrPDx5m3QJ5Henh0Fxn79i.jpg",
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/xRWht48C2V8XNfzvPehyClOvDni.jpg",
    title: "The Matrix",
    genre: "Action",
    rating: 8.7,
    director: "Lana Wachowski & Lilly Wachowski",
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg",
    title: "Fight Club",
    genre: "Drama",
    rating: 8.8,
    director: "David Fincher",
    actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    title: "Alien",
    genre: "Horror",
    rating: 8.4,
    director: "Ridley Scott",
    actors: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    title: "Schindler's List",
    genre: "History",
    rating: 8.9,
    director: "Steven Spielberg",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    title: "Avengers: Infinity War",
    genre: "Superhero",
    rating: 8.4,
    director: "Anthony Russo & Joe Russo",
    actors: ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/9gm3lLdQIaX6m8HWY8K1eqrH4Ul.jpg",
    title: "The Lion King",
    genre: "Animation",
    rating: 8.5,
    director: "Roger Allers & Rob Minkoff",
    actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/pSgZxGHjO8VvC2pQVsQvuAdCblJ.jpg",
    title: "Gladiator",
    genre: "Action",
    rating: 8.5,
    director: "Ridley Scott",
    actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/ta5oblpMlEcIPIS2YGcq9XExuQ.jpg",
    title: "The Departed",
    genre: "Crime",
    rating: 8.5,
    director: "Martin Scorsese",
    actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
    title: "The Avengers",
    genre: "Superhero",
    rating: 8.0,
    director: "Joss Whedon",
    actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/6aEft64kxv5lxy8ENNdZ0V3exYc.jpg",
    title: "Jurassic Park",
    genre: "Adventure",
    rating: 8.1,
    director: "Steven Spielberg",
    actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/5UQsZrfbfG2dYqEYx9iyMiBnW.jpeg",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    rating: 8.8,
    director: "Peter Jackson",
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/rl7pr8VrezIvAhv6IPWNd8あと.jpg".replace("あと", ""),
    title: "Inglourious Basterds",
    genre: "War",
    rating: 8.3,
    director: "Quentin Tarantino",
    actors: ["Brad Pitt", "Christoph Waltz", "Michael Fassbender"]
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/dlNQ3poRSfUd7ssdS4B1yPxNG9m.jpg",
    title: "The Prestige",
    genre: "Drama",
    rating: 8.5,
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
  }
];