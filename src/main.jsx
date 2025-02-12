import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Page from "./Components";
import Header from "./Header";
import user from "./defaultUser";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="main">
      <Header />
      <Page prop={user} />
    </div>
  </StrictMode>
);
