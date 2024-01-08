import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
