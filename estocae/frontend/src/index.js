import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./routes/home/home"
import NotMatch from "./routes/notFound/404";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/*" element={<NotMatch/>}/>
    </Routes>
  </BrowserRouter>
);