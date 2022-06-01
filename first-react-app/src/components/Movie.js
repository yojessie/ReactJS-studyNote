import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// a 태그를 통해 제목에 링크를 걸어줄 수도 있지만, 그러면 페이지 전체가 리로드 되어버린다.
// router의 link를 활용해서 처리해주면 전체 페이지 리로드가 되지 않고 화면이 넘어간다.

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
