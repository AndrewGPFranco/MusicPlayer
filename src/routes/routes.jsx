import Home from "../pages/Home.jsx";
import Music from "../pages/Music.jsx";
import Games from "../pages/Games.jsx";
import NotFound from "../pages/NotFound.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
