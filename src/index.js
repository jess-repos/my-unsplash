import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GalleryProvider } from "./context/GalleryContext";

ReactDOM.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>,
  document.getElementById("root")
);
