import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Results } from "../pages/Results";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<Home />} />
      <Route path="/team" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  );
}
