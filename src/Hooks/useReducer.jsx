import { useReducer, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

/**
 *
 * @param {typeof initialTodos} state the current state before any changes
 * @param {{type:string,id:number}} action object containg what actions to perform
 * @returns {typeof initialTodos} update state
 */
const reducer = (state, action) => {
  // Weird function this
  switch (action.type) {
    case "COMPLETE":
      // for every todo != action.id just return it to statearray, else overwrite complete that object
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete }; // id and title stay the same
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default function Todos() {
  // todo = state, dispach = f({action})
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const reRenderCounter = useRef(0);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  useEffect(() => {
    reRenderCounter.current += 1;
    console.log(`Re-Rendered = ${reRenderCounter.current}`);
  });

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
