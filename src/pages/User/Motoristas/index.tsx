import { useState } from "react";
import {
  CreateDriverModal,
  EditDriverModal,
  DeleteDriverModal,
} from "../../../shared/components/User/Modals/";

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
  const handleEditModal = (idUsuario: number, driverName: string) => {
    setIsEditDriverModalOpen(true);
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
        {/* <button
          className="create-button"
          onClick={() => setIsCreateDriverModalOpen(true)}
        >
          Cadastrar Motorista <i className="ph ph-plus"></i>
        </button> */}
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
              <div
                className={
                  driver.status === "ATIVO" ? "driver" : "driver inativo"
                }
                key={driver.idUsuario}
              >
                <p>{driver.nome}</p>
                <p>{driver.documento}</p>

                <div className="options-modal">
                  <p
                    className={driver.status === "ATIVO" ? "ativo" : "inativo"}
                  >
                    {driver.status}
                  </p>
                  <div className="options">
                    {/* <button
                      className="edit-icon"
                      onClick={() =>
                        handleEditModal(driver.idUsuario, driver.nome)
                      }
                    >
                      <i className="ph ph-pencil"></i>
                    </button> */}
                    <button
                      className="delete-icon"
                      disabled={driver.status === "INATIVO" ? true : false}
                      onClick={() =>
                        handleDeleteModal(driver.idUsuario, driver.nome)
                      }
                    >
                      <i className="ph ph-trash"></i>
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