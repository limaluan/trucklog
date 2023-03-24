import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";
import { Viagens, Motoristas } from "../pages/Collaborator";
import { ColaboratorLayout } from "../shared/layouts/CollaboratorLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Collaborator Routes */}
      {/* Privar rotas quando houver sistema de atutenticação */}
      <Route path="/colaborador/" element={<ColaboratorLayout />}>
        <Route path="/colaborador/viagens" element={<Viagens />} />
        <Route path="/colaborador/motoristas" element={<Motoristas />} />
      </Route>
    </Routes>
  );
};
