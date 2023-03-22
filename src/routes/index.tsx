import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};
