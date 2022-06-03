import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
// useParams 라는 함수를 통해 해당 컴포넌트를 불러올때 사용된 라우터에 있는 변수(:id) 를 가져올 수 있다.
import Movie from "../components/Movie";

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
          <Link to={`/`}>Go back</Link>
          <h1>{movie.title}</h1>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            genres={movie.genres}
            description={movie.description_full}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
