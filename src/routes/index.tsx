import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";
import { Viagens, Motoristas, Caminhoes, Postos } from "../pages/User";
import { ColaboratorLayout } from "../shared/layouts/CollaboratorLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* LandingPage Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Collaborator Routes */}
      {/* Privar rotas quando houver sistema de atutenticação */}
<<<<<<< HEAD
      <Route path="/colaborador/" element={<ColaboratorLayout />}>
        <Route path="/colaborador/viagens" element={<Viagens />} />
        <Route path="/colaborador/motorista" element={<Motoristas />} />
        <Route path="/colaborador/caminhoes" element={<Caminhoes />} />
        <Route path="/colaborador/postos" element={<Postos />} />
=======
      <Route path="/usuario/" element={<ColaboratorLayout />}>
        <Route path="/usuario/viagens" element={<Viagens />} />
        <Route path="/usuario/motoristas" element={<Motoristas />} />
        <Route path="/usuario/caminhoes" element={<Caminhoes />} />
        <Route path="/usuario/postos" element={<Postos />} />
>>>>>>> 5f62cfe67189870b015e78ea0e4b5bfa4abb8fe4
      </Route>
    </Routes>
  );
};
