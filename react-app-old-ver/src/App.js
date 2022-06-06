import React from "react";
import axios from "axios";
import Movie from "./Movie";

// old ver 코드는 class 컴포넌트로 구성되어있다.
// 심플한 function component 대신 class component를 활용했던 이유는 state를 활용하기 위해서였다.
// class component를 쓸때는 render 메소드 안에서 return 시켜줘야한다.
class App extends React.Component {
  state = {
    isLoading: true,
    movieList: [],
  };

  getMovies = async () => {
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    this.setState((current) => (current.movieList = movies.data.data.movies));
    this.setState((current) => (current.isLoading = false));
  };

  componentDidMount() {
    this.getMovies();
  }
  // there are few method about component's life cycle
  // componentDidMount 는 useEffect와 같은 역할을 한다.

  render() {
    const { isLoading, movieList } = this.state;
    // old version에서는 state를 한번 더 선언해주어야 바로 사용할 수 있다.
    // 아니면 this.state.isLoading 이런식으로 가져올 수 있다.

    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="movies">
            {movieList.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  year={movie.year}
                  poster={movie.medium_cover_image}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
