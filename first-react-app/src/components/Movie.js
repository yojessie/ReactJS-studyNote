import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// a 태그를 통해 제목에 링크를 걸어줄 수도 있지만, 그러면 페이지 전체가 리로드 되어버린다.
// router의 link를 활용해서 처리해주면 전체 페이지 리로드가 되지 않고 화면이 넘어간다.

function Movie({ id, title, img, summary, description, genres }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card">
        <img className="image" src={img} alt={title} />
        <div className="information">
          <h1 className="title">{title}</h1>
          <p className="summary">
            {summary.length <= 500 ? summary : `${summary.slice(0, 500)}...`}
          </p>
          <p className="summary">{description}</p>
          <ul className="genres">
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
