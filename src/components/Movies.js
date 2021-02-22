import { useEffect, useState } from "react/cjs/react.development";
import MovieList from "./MovieList";
import Spinner from "../35.gif";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchTerm = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`;
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(searchTerm);

    fetch(searchTerm)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    setSearch("");
  };
  return (
    <>
      <div className="search">
        <form onSubmit={onSubmit}>
          <input
            type="search"
            placeholder="Search Movies..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="container">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <MovieList movie={movie} />
              </div>
            );
          })
        ) : (
          <div className="loading">
            <img className="imageLoad" src={Spinner} alt="Loading..." />
          </div>
        )}
      </div>
    </>
  );
};

export default Movies;
