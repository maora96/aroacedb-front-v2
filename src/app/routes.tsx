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
import { SuggestCharacter } from "../pages/SuggestCharacter";
import { Success } from "../pages/Success";
import { SuggestStory } from "../pages/SuggestStory";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";
import { AdminCharacters } from "../pages/AllAdminCharacters";
import { EditCharacter } from "../pages/EditCharacter";
import { AdminStories } from "../pages/AllAdminStories";
import { EditStory } from "../pages/EditStory";
import { AddStoriesToCharacter } from "../pages/AddStoriesToCharacter";
import { AddNewStoryToCharacter } from "../pages/AddNewStoryToCharacter";

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
      <Route path="/suggest-character" element={<SuggestCharacter />} />
      <Route path="/suggest-story" element={<SuggestStory />} />
      <Route path="/success" element={<Success />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/characters" element={<AdminCharacters />} />
      <Route path="/edit/character/:id" element={<EditCharacter />} />
      <Route path="/admin/stories" element={<AdminStories />} />
      <Route path="/edit/story/:id" element={<EditStory />} />
      <Route
        path="/edit/character/:id/stories"
        element={<AddStoriesToCharacter />}
      />
      <Route
        path="/edit/character/:id/stories/new"
        element={<AddNewStoryToCharacter />}
      />
    </Routes>
  );
}
