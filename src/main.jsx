import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import MyGlobalStyles from "./styles/globalStyles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyGlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
