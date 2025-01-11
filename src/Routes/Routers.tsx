
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SkillsUp from "../Pages/Emproves/SkillsUp";
import GoldSys from "../Pages/MenuGame/Menu";
import Updated from "../Pages/Update/Updated";

export default function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/skills" element={<SkillsUp />} />
        <Route path="/" element={<GoldSys />} />
        <Route path="/ups" element={<Updated />} />
        {/* Adicione outras rotas aqui */}
      </Routes>
    </Router>
  );
}
