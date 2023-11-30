import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nopage from "./pages/Nopage";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </div>
  );
}

export default App;
