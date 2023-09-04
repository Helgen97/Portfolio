import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css/normalize.css";
import "./styles/index.scss";
import App from "./app/Application";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
