import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";
import { Dashboard, Tickets } from "../pages/Collaborator";
import { ColaboratorLayout } from "../shared/layouts/CollaboratorLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Collaborator Routes */}
      {/* Privar rotas quando houver sistema de atutenticação */}
      <Route path="/colaborador/" element={<ColaboratorLayout/>}>
        <Route path="/colaborador/dashboard" element={<Dashboard />} />
        <Route path="/colaborador/tickets" element={<Tickets />} />
      </Route>
    </Routes>
  );
};
