import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";
import { Dashboard, Tickets } from "../pages/ClientPanel";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Dashboard Routes */}
      {/* Privar rotas quando houver sistema de atutenticação */}
      <Route path="/cliente/dashboard" element={<Dashboard />} />
      <Route path="/cliente/tickets" element={<Tickets />} />
    </Routes>
  );
};
