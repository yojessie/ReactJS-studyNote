import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  // Movie 컴포넌트에서 받아온 props를 활용할 수 있다.
  // props를 출력해보면 기본적으로 들어있는 메소드가 있는데, 그것들을 활용해서 리다이렉션 시켜줄 수 있다.
  // Home 에서 more 버튼을 눌러 정상적으로 props를 받아오지 못하는 경우 (링크 직접 입력 시) '/'경로로 보내도록 push시켰다.
  render() {
    const { location, history } = this.props;

    if (location.state) {
      return (
        <div>
          <img src={location.state.poster} alt={location.state.title} />
          <h1>{location.state.title}</h1>
          <p>{location.state.summary}</p>
          <ul>
            {location.state.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      history.push("/");
    }
  }
}

export default Detail;
