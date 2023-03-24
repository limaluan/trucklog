import { useState } from "react";
import { CreateDriverModal } from "../../../shared/components/Collaborator/Modals";

import { useDrivers } from "../../../shared/hooks/useDrivers";
import { MotoristasContainer } from "./styles";
import { EditDriverModal } from "../../../shared/components/Collaborator/Modals/EditDriverModal";

export const Motoristas = () => {
  const { drivers } = useDrivers();

  const [searchDriver, setSearchDrivers] = useState("");

  const [isCreateDriverModalOpen, setIsCreateDriverModalOpen] = useState(false);

  return (
    <MotoristasContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Motoristas</a>
        </div>

        <h2 className="title-page">Motoristas</h2>
        <button
          className="create-button"
          onClick={() => setIsCreateDriverModalOpen(true)}
        >
          Adicionar Motorista <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchDriver}
          onChange={(e) => setSearchDrivers(e.target.value)}
          type="text"
          placeholder="Procurar motoristas"
        />

        <div className="trips-header">
          <p>
            Nome <i className="ph ph-arrow-down"></i>
          </p>
          <p>CNH</p>
          <p>Status</p>
          <p>E-mail</p>
        </div>

        <div className="trips-body">
          {drivers
            .filter((driver) =>
              driver.nome
                .toLocaleLowerCase()
                .includes(searchDriver.toLowerCase())
            )
            .map((driver) => (
              <div
                className={
                  driver.statusMotorista === "DISPONIVEL"
                    ? "driver DISPONIVEL"
                    : "driver EM_ESTRADA"
                }
                key={driver.idUsuario}
              >
                <p>{driver.nome}</p>
                <p>{driver.cnh}</p>
                <p
                  className={
                    driver.statusMotorista === "DISPONIVEL"
                      ? "sucess"
                      : "finished"
                  }
                >
                  {driver.statusMotorista.replace("_", " ")}
                </p>
                <div className="containerEmail">
                  {driver.email}
                  <div
                    className={
                      driver.statusMotorista === "DISPONIVEL"
                        ? "succes"
                        : "finished"
                    }
                  >
                    <button onClick={() => setIsCreateDriverModalOpen(true)}>
                      <i className="ph ph-pencil"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <CreateDriverModal
        isOpen={isCreateDriverModalOpen}
        onRequestClose={() => setIsCreateDriverModalOpen(false)}
      />
      <EditDriverModal
        isOpen={is}
        onRequestClose={() => setIsCreateDriverModalOpen(false)}
      />
    </MotoristasContainer>
  );
};
