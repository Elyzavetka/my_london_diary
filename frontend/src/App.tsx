import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery/Gallery";

import Feed from "./components/Feed";
import Recomendations from "./components/Recommendations/Recommendations";
import Geolocation from "./components/Geolocation";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost/NewPost";
import LoginPage from "./pages/Auth/LoginPage";
import SignupPage from "./pages/Auth/SignupPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
