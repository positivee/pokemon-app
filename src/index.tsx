import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./LikedListContext";
import { pokemonApi } from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApiProvider api={pokemonApi}>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ApiProvider>
  </React.StrictMode>
);
