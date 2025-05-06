import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const hello = [1, 2, 3, 4];

root.render(
  <React.StrictMode>
    <span>
      {hello.map((val, i) => (
        <h1>{val}</h1>
      ))}
    </span>
  </React.StrictMode>
);
