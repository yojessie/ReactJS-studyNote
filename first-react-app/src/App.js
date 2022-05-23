import { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState(0);
  const onClick = () => setValue((value) => value + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("Like call the API...");
    // []안에 넣어주는 것은 dependencyList이다. the things ReactJS should watch.
    // state가 변해서 rerender 되더라도 useEffect 안에 있는 코드는 모든 요소가 렌더될때마다 실행되지 않고 dependency에 따른다.
    // dependency가 없으므로 한번만 실행된다.
    // dependency는 array이므로 여러개 설정이 가능하다.
  }, []);
  useEffect(() => {
    console.log("It will run everytime");
  }, [value]);
  useEffect(() => {
    if ((keyword !== "") & (keyword.length > 5)) {
      console.log("search for", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} placeholder="search here" onChange={onChange} />
      <h1>{value}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
