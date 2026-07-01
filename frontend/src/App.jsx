import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects"
import Education from "./pages/Education/Education"
import Experience from "./pages/Experience/Experience"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}