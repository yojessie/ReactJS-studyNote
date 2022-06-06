import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// state를 사용할게 아니라서 function component로 작성한다.
function Movie({ year, title, summary, poster, genres, id }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <div className="title">
          <h1 className="title-text">{title}</h1>
          <Link
            className="more-button"
            to={{
              pathname: `/movie/${id}`,
              state: {
                year,
                title,
                summary,
                poster,
                genres,
              },
            }}
          >
            more
          </Link>
        </div>
        <strong>{year}</strong>
        <p>{summary.slice(0, 370)}...</p>
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
