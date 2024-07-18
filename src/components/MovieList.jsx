import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  // handle fetch data from API
  const fetchMovies = async () => {
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '64ce9f5feemsh4cedcb4c820dcc3p1f7ee3jsne4419dfc8871',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  // call fetch inside useEffect
  useEffect(() => {
    fetchMovies();
  }, []);

  console.log("All movies", movies);

  
  return (
    <div  className="mobile">
      {movies.map((movie) => {
        return (
          <MovieCard
            title={movie.title}
            imgUrl={movie.image}
            description={movie.description}
            rating={movie.rating}
            key={movie.id}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
