import Home from "../pages/Home.jsx";
import Music from "../pages/Music.jsx";
import Common from "../pages/Common.jsx";
import Perfil from "../pages/Perfil.jsx";
import About from "../pages/About.jsx";
import NotFound from "../pages/NotFound.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMusic from "../pages/AboutMusic.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music/:id" element={<AboutMusic />}></Route>
        <Route path="/songs/common" element={<Common />}></Route>
        <Route path="/perfil" element={<Perfil />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/songs/:id" element={<Music />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
