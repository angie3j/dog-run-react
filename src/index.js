import React from "react";
import ReactDOM from "react-dom/client";
// imsport "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./components/styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
