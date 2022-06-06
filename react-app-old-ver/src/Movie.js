import PropTypes from "prop-types";

// state를 사용할게 아니라서 function component로 작성한다.
function Movie({ year, title, summary, poster }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={poster} alt={title} />
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number,
  year: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
};

export default Movie;
