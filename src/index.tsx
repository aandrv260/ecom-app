// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Styles
import "./index.scss";

// Components
import App from "./App";

const app = ReactDOM.createRoot(
  document.getElementById("app") as HTMLDivElement
);
app.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
