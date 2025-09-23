/**
 * Entry point for the React application, rendering the Dmytro Donchenko Portfolio SPA.
 * @module index
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/Application";
import "normalize.css/normalize.css";
import "./styles/index.scss";

/**
 * Initializes the React application and renders it to the DOM.
 */
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
