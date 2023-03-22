import { useState } from "react";
import { useDrivers } from "../../../shared/hooks/useDrivers";
import { ClientPanelLayout } from "../../../shared/layouts/ClientPanelLayout";
import { DashboardContainer } from "./styles";

export const Dashboard = () => {
  const { drivers } = useDrivers();

  const [searchDrivers, setSearchDrivers] = useState("");

  return (
    <ClientPanelLayout>
      <DashboardContainer>
        <main className="content">
          <div className="user-trail">
            <span>Meu Painel</span>
            <span>{" > "}</span>
            <span>Dashboard</span>
          </div>
          <h2>Dashboard</h2>
          <div className="drivers-section">
            <h2>Motoristas</h2>
            <input
              value={searchDrivers}
              onChange={(e) => setSearchDrivers(e.target.value)}
              type="text"
              placeholder="Procurar motoristas"
            />
            <ul>
              {drivers
                .filter((driver) =>
                  driver.nome
                    .toLocaleLowerCase()
                    .includes(searchDrivers.toLowerCase())
                )
                .map((driver) => (
                  <li key={driver.cpf}>
                    <p>
                      <input type="checkbox" />
                      {driver.nome}
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </main>
      </DashboardContainer>
    </ClientPanelLayout>
  );
};
