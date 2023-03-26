import { Route, Routes } from "react-router-dom";
import { LandingPage, Login } from "../pages";
import { Viagens, Motoristas, Caminhoes, Postos } from "../pages/User";
import { AuthProvider } from "../shared/context/AuthContext";
import { ColaboratorLayout } from "../shared/layouts/CollaboratorLayout";
import { Dashboard } from "../pages/User/Dashboard/Dashboard";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* LandingPage Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* Collaborator Routes */}
        {/* Privar rotas quando houver sistema de atutenticação */}
        <Route path="/usuario/" element={<ColaboratorLayout />}>
          <Route path="/usuario/dashboard" element={<Dashboard />} />
          <Route path="/usuario/viagens" element={<Viagens />} />
          <Route path="/usuario/motoristas" element={<Motoristas />} />
          <Route path="/usuario/caminhoes" element={<Caminhoes />} />
          <Route path="/usuario/postos" element={<Postos />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
