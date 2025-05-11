
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Reducer from "./Hooks/useReducer"
// import CallBack from "./Hooks/useCallback"

// const root = ReactDOM.createRoot(document.getElementById("root"));



// const app = (
//   <React.StrictMode>
//     <Reducer/>
//   </React.StrictMode>
// );

// root.render(app);

import { useState,useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Hooks/useCallback";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />{/* Shows the list of todos HOWEVER is Static content */}
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);