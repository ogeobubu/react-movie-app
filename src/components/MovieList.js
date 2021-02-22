import { useState } from "react";
import imageDefault from "../default.jpg";

const MovieList = ({
  movie: { backdrop_path, vote_average, title, overview },
}) => {
  const image = `${
    backdrop_path
      ? `https://image.tmdb.org/t/p/w1280/${backdrop_path}`
      : imageDefault
  }`;
  const [readMore, setReadMore] = useState(false);

  const checkRating = () => {
    if (vote_average < 5.0) {
      return "red";
    } else if (vote_average < 8) {
      return "yellow";
    } else {
      return "green";
    }
  };

  return (
    <div className="movie-list">
      <img src={image} alt={title} />
      <div className="content">
        <h3 style={{ color: "#dfaf89" }}>{title}</h3>
        <p className={checkRating()}>{vote_average}</p>
      </div>
      <p className="overview">
        {readMore ? overview : `${overview.substr(0, 93)}...`} {""}
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
    </div>
  );
};

export default MovieList;
