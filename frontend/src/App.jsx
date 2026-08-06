import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects/Projects"
import Achievements  from "./pages/Achievements/Achievements"
import Experience from "./pages/Experience/Experience"

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Achievements" element={<Achievements />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}
