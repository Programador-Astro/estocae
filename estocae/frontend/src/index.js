import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// https://reactrouter.com/start/declarative/routing
import Login from "./routes/login/login"
import Cadastro from "./routes/cadastro/cadastro"
import Home from "./routes/home/home"
import NotMatch from "./routes/notFound/404";
const root = document.getElementById("root");
// https://reactrouter.com/start/declarative/installation
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/*" element={<NotMatch/>}/>
    </Routes>
  </BrowserRouter>
);