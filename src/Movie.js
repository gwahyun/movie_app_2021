import React from "react";
import Proptypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h1 className="movie__title">{title}</h1>
        <h5 className="movie__year">{year}</h5>
        <ul className="movie__genres">
          {genres.map((genres, index) => (
            <li key={index} className="genres__genres">
              {genres}
            </li>
          ))}
        </ul>
        <h3 className="movie__summary">{summary.slice(0, 100)}...</h3>
      </div>
    </div>
  );
}
Movie.prototypes = {
  key: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};

export default Movie;
