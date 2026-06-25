import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Project"
import Education from "./pages/Education"
import Experiences from "./pages/Experiences"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experiences" element={<Experiences />} />
      </Routes>
    </BrowserRouter>
  );
}