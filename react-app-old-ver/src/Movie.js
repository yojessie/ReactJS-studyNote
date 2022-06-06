import PropTypes from "prop-types";
import "./Movie.css";

// state를 사용할게 아니라서 function component로 작성한다.
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h1>{title}</h1>
        <strong>{year}</strong>
        <p>{summary}</p>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li className="genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
