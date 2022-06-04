// New ver
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Old ver
import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));

// The changes between New and old version
// React 17버전부턴 JSX를 import React 없이 사용할 수 있다.
// 전에는 하나의 컴포넌트만 렌더링 할 수 있었으나, 이제 여러개 렌더링이 가능하다.
// 전에는 propTypes를 사용하기 위해서 npm install prop-types가 필요했다. (지금은 그냥 import!)
