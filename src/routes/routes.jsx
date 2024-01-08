import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import NotFound from "../pages/NotFound.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
