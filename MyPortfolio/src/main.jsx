import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./header";
import Body from "./Body";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header></Header>
    <Body></Body>
    <div>hello</div>
  </StrictMode>
);
