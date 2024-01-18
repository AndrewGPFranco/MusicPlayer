import Home from "../pages/Home.js";
import Music from "../pages/Music.js";
import Common from "../pages/Common.js";
import Perfil from "../pages/Perfil.js";
import About from "../pages/About.js";
import NotFound from "../pages/NotFound.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMusic from "../pages/AboutMusic.js";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music/:id" element={<AboutMusic />}></Route>
        <Route path="/songs/common" element={<Common />}></Route>
        <Route path="/profile" element={<Perfil />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/songs/:id" element={<Music />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
