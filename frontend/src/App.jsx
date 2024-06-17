import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";

import Feed from "./components/Feed";
import Recomendations from "./components/Recommendations/Recommendations";
import Geolocation from "./components/Geolocation";

function App() {
  return (
    <div className="App">
      <h1>My London Diary</h1>
      <div className="appContainer">
        <div className="feed">
          <Feed />
        </div>
        <div className="recommendations">
          <Recomendations />
        </div>
      </div>
    </div>
  );
}

export default App;
