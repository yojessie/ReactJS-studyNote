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

  const [budget, setBudget] = useState("");
  const onChange = (event) => setBudget(event.target.value);

  const [showResult, setShowResult] = useState(false);
  const onClick = () => setShowResult((boolean) => !boolean);

  const [selectedCoin, setSelectedCoin] = useState("");
  const handleselected = (event) => setSelectedCoin(event.target.value);

  return (
    <div>
      <h1>Coin calculator</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div className="calculator">
          <div className="budget">
            <label htmlFor="budget">Write your budget in dollar</label>
            <input
              value={budget}
              onChange={onChange}
              id="budget"
              type="number"
              placeholder="How much"
            />
          </div>
          <div className="coin">
            <strong>Select the coin</strong>
            <select onChange={handleselected}>
              {coins.map((coin) => (
                <option>
                  {coin.name}({coin.symbol}) : ${" "}
                  {Math.round(coin.quotes.USD.price)}
                </option>
              ))}
            </select>
          </div>
          <button type="button" onClick={onClick}>
            {showResult ? "Reset" : "Calculate"}
          </button>
          {showResult ? <h3>You can buy '{selectedCoin}'</h3> : null}
        </div>
      )}
    </div>
    // 💡 선택된 옵션을 잡아왔으나, 그냥 스트링으로 넘어옴
    // 💡 잡아둔 input value 값으로 결과값 계산 로직 필요
    // 💡 select 디폴트값 바꿀 수 있는지 확인

    // map 함수를 사용했을때 받아온 인자는, arr의 각 item을 의미한다.
    // 받아온 데이터에 id값이 있기 때문에, key로 사용할 index를 받아오지 않아도 됨.
  );
}

export default App;
