import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodoList((currentArr) => [todo, ...currentArr]);
    setTodo("");
  };

  return (
    <div onSubmit={onSubmit}>
      <h1>My todo list ({todoList.length})</h1>
      <form>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="write your to-do list"
        />
        <button>save the list</button>
      </form>
      <hr />
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
