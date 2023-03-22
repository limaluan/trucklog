import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
