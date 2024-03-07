import { Route, Routes } from "react-router-dom";
import { GlobalLayout } from "../components/GlobalLayout";
import { AdvancedFilters } from "../components/AdvancedFilters";
import { Home } from "../pages/Home";

export function MainRoutes() {
  console.log("hello?");
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
