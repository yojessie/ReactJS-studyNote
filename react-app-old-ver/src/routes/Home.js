import React from "react";
import axios from "axios";
import Movie from "../components/Movie";

class Home extends React.Component {
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

  render() {
    const { isLoading, movieList } = this.state;

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
                  id={movie.id}
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

export default Home;
