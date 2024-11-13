import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <React.Suspense fallback="loading">
      <App />
    </React.Suspense>
  </StrictMode>
);
