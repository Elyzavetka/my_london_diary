import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Gallery from './components/Gallery';

import Feed from "./components/Feed";
import Recommendations from "./components/Recommendations/Recommendations";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </BrowserRouter> */}
      <Feed />
    </div>
  );
}

export default App;
