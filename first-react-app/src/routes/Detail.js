import { useEffect } from "react";
import { useParams } from "react-router-dom";
// useParams 라는 함수를 통해 해당 컴포넌트를 불러올때 사용된 라우터에 있는 변수(:id) 를 가져올 수 있다.

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return <h1>Detail</h1>;
}

export default Detail;
