import { useState } from "react";
import { CreateTruckModal } from "../../../shared/components/User/Modals/TruckModals/CreateTruckModal";
import { EditTruckModal } from "../../../shared/components/User/Modals/TruckModals/EditTruckModal";
import { useTrucks } from "../../../shared/hooks";
import { CaminhoesContainer } from "./styles";

export const Caminhoes = () => {
  const { trucks } = useTrucks();

  const [truckId, setTruckId] = useState(0);
  const [searchTruck, setSearchTruck] = useState("");

  const [isCreateTruckModalOpen, setIsCreateTruckModalOpen] = useState(false);
  const [isEditTruckModalOpen, setIsEditTruckModalOpen] = useState(false);

  return (
    <CaminhoesContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Caminhões</a>
        </div>

        <h2 className="title-page">Caminhões</h2>
        <button
          onClick={() => setIsCreateTruckModalOpen(true)}
          className="create-button"
        >
          Cadastrar Caminhão <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchTruck}
          onChange={(e) => setSearchTruck(e.target.value)}
          type="text"
          placeholder="Procurar caminhões"
        />

        <div className="trucks-header">
          <p>
            Modelo <i className="ph ph-arrow-down"></i>
          </p>
          <p>Placa</p>
          <p>Combustível</p>
          <p>Situação</p>
          <p>Status</p>
        </div>

        <div className="trucks-body">
          {trucks
            .filter((truck) =>
              truck.modelo.toLowerCase().includes(searchTruck.toLowerCase())
            )
            .map((truck) => (
              <div
                className={`truck truck-${truck.status.toLowerCase()}`}
                key={truck.placa}
              >
                <p>{truck.modelo}</p>
                <p>{truck.placa}</p>
                <p
                  className={
                    truck.nivelCombustivel <= 20
                      ? "error"
                      : truck.nivelCombustivel <= 60
                      ? "warning"
                      : "success"
                  }
                >
                  {truck.nivelCombustivel}%
                </p>
                <p
                  className={
                    truck.statusCaminhao === "EM_VIAGEM" ? "warning" : "success"
                  }
                >
                  {truck.statusCaminhao.replace("_", " ")}
                </p>
                <div
                  className={truck.status === "INATIVO" ? "error" : "success"}
                >
                  {truck.status}
                  <div className="btn-container">
                    <button
                      onClick={() => {
                        setTruckId(truck.idCaminhao);
                        return setIsEditTruckModalOpen(true);
                      }}
                    >
                      <i title="Abastecer" className="ph ph-gas-pump"></i>
                    </button>

                    <button>
                      <i
                        title="Deletar"
                        className="ph ph-trash delete-icon"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <CreateTruckModal
        isOpen={isCreateTruckModalOpen}
        onRequestClose={() => setIsCreateTruckModalOpen(false)}
      />
      <EditTruckModal
        isOpen={isEditTruckModalOpen}
        onRequestClose={() => setIsEditTruckModalOpen(false)}
        truckId={truckId}
      />
    </CaminhoesContainer>
  );
};
