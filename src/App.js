import 'bootstrap/dist/css/bootstrap.min.css'
import "./Styles.css";
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Home from "./pages/Home";


export default function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/Search" element={<Search />} />
        </Routes>
    </div>
  );
}

