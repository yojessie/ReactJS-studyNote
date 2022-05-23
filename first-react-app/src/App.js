import { useState, useEffect } from "react";

function Title() {
  useEffect(() => {
    console.log("It will run when the title is rendered");
    return () => console.log("The title is destroyed");
    // cleanUp function : 컴포넌트가 destroy될때 실행시키고 싶은 코드가 있다면, return 함수 안에 넣어주면 된다.
  }, []);
  return <h1>This is title</h1>;
}

function App() {
  const [showTitle, setShowTitle] = useState(false);

  const onClick = () => setShowTitle((boolean) => !boolean);
  return (
    <div>
      <button onClick={onClick}> {showTitle ? "hide" : "show"}</button>
      {showTitle ? <Title /> : null}
    </div>
  );
}

export default App;
