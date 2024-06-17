import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Results } from "../pages/Results";
import { About } from "../pages/About";
import { Team } from "../pages/Team";
import { Contact } from "../pages/Contact";
import { CanonCharacters } from "../pages/CanonCharacters";
import { AllCharacters } from "../pages/AllCharacters";
import { AdvancedResults } from "../pages/AdvancedResults";
import { Character } from "../pages/Character";

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/canon-characters/:param" element={<CanonCharacters />} />
      <Route path="/all-characters/:param" element={<AllCharacters />} />
      <Route path="/advanced-results" element={<AdvancedResults />} />
      <Route path="/character/:id" element={<Character />} />
    </Routes>
  );
}
