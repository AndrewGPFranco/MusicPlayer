import Home from "../pages/Home.tsx";
import Music from "../pages/Music.tsx";
import Common from "../pages/Common.tsx";
import Perfil from "../pages/Perfil.tsx";
import About from "../pages/About.tsx";
import NotFound from "../pages/NotFound.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMusic from "../pages/AboutMusic.tsx";

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
