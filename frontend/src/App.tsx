import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";

import Feed from "./components/Feed";
import Recomendations from "./components/Recommendations/Recommendations";
import Geolocation from "./components/Geolocation";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
