import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { ContextProvider } from "./contexts/ContextProvider.js";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
