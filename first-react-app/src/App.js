import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  // useState값이 그냥 비어있으면 undefined 되기때문에 빈 arr를 임의로 넣어준다.
  // 화면에 코인 총 갯수를 표시하려고 length를 사용하는데, undefined로 두면 에러가 뜬다.

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json()) // fetch로 받아온 데이터를 받아서 json으로 변환
      .then((json) => {
        setCoins(json); // 변환한 데이터를 coins에 넣어준다
        setLoading(false);
      });
  }, []); // 처음 화면 렌더 시 한번만 실행시키기

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name}({coin.symbol}) : $ {Math.round(coin.quotes.USD.price)}
          </li>
        ))}
      </ul>
    </div>
    // map 함수를 사용했을때 받아온 인자는, arr의 각 item을 의미한다.
    // 받아온 데이터에 id값이 있기 때문에, key로 사용할 index를 받아오지 않아도 됨.
  );
}

export default App;
