import { useState } from "react";
import {
  CreateDriverModal,
  DeleteDriverModal,
  EditDriverModal,
} from "../../../shared/components/User/Modals";
import { useDrivers } from "../../../shared/hooks/useDrivers";
import { MotoristasContainer } from "./styles";

export const Motoristas = () => {
  const { drivers } = useDrivers();

  const [searchDriver, setSearchDrivers] = useState("");

  const [isCreateDriverModalOpen, setIsCreateDriverModalOpen] = useState(false);
  const [isEditDriverModalOpen, setIsEditDriverModalOpen] = useState(false);
  const [isDeleteDriverModalOpen, setIsDeleteDriverModalOpen] = useState(false);
  const [driverName, setDriverName] = useState("");
  const [idUsuario, setIdUsuario] = useState(0);

  const handleDeleteModal = (idUsuario: number, driverName: string) => {
    setIsDeleteDriverModalOpen(true);
    setIdUsuario(idUsuario);
    setDriverName(driverName);
  };

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
          Cadastrar Motorista <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchDriver}
          onChange={(e) => setSearchDrivers(e.target.value)}
          type="text"
          placeholder="Procurar motoristas"
        />

        <div className="drivers-header">
          <p>
            Nome <i className="ph ph-arrow-down"></i>
          </p>
          <p>CNH</p>
          <p>Situação</p>
          <p>Status</p>
        </div>

        <div className="drivers-body">
          {drivers
            .filter((driver) =>
              driver.nome
                .toLocaleLowerCase()
                .includes(searchDriver.toLowerCase())
            )

            .sort((item) => {
              return item.status === "ATIVO" ? -1 : 1;
            })
            .map((driver) => (
              <div className="driver" key={driver.idUsuario}>
                <p>{driver.nome}</p>
                <p>{driver.cnh}</p>
                <p
                  className={
                    driver.statusMotorista === "DISPONIVEL"
                      ? "success"
                      : "finished"
                  }
                >
                  {driver.statusMotorista.replace("_", " ")}
                </p>
                <div className="containerEmail">
                  <p>{driver.status} </p>
                  <div />

                  <div
                    className={
                      driver.status === "ATIVO" ? "success" : "finished"
                    }
                  >
                    <button onClick={() => handleOpenModal(driver.idUsuario)}>
                      <i className="ph ph-pencil"></i>
                    </button>
                    <div className="btn-container">
                      <button
                        onClick={() =>
                          handleDeleteModal(driver.idUsuario, driver.nome)
                        }
                        disabled={driver.status === "ATIVO" ? false : true}
                      >
                        <i
                          title="Deletar Posto"
                          className="ph ph-trash delete-icon"
                        ></i>
                      </button>
                    </div>
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
        isOpen={isEditDriverModalOpen}
        onRequestClose={() => setIsEditDriverModalOpen(false)}
        idUsuario={idUsuario}
      />
      <DeleteDriverModal
        isOpen={isDeleteDriverModalOpen}
        onRequestClose={() => setIsDeleteDriverModalOpen(false)}
        idUsuario={idUsuario}
        nome={driverName}
      />
    </MotoristasContainer>
  );
};
