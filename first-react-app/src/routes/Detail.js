import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// useParams 라는 함수를 통해 해당 컴포넌트를 불러올때 사용된 라우터에 있는 변수(:id) 를 가져올 수 있다.

function Detail() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <Link to={`/`}>Go back</Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
