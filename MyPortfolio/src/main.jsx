import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Body from "./Body/Body";
import "antd/dist/reset.css"; // Новый стиль (Ant Design 5.x и выше)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Body></Body>
  </StrictMode>
);
