import { useState } from "react";
import { CreateTruckModal } from "../../../shared/components/Collaborator/Modals/CreateTruckModal";
import { useTrucks } from "../../../shared/hooks/useTrucks";
import { CaminhoesContainer } from "./styles";

export const Caminhoes = () => {
  const { trucks } = useTrucks();

  const [searchTruck, setSearchTruck] = useState("");

  const [isCreateTruckModalOpen, setIsCreateTruckModalOpen] = useState(false);

  return (
    <CaminhoesContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Caminhões</a>
        </div>

        <h2 className="title-page">Caminhões</h2>
        <button onClick={() => setIsCreateTruckModalOpen(true)} className="create-button">
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
              <div className="truck" key={truck.placa}>
                <p>{truck.modelo}</p>
                <p>{truck.placa}</p>
                <p>{truck.nivelCombustivel}%</p>
                <p
                  className={
                    truck.statusCaminhao === "EM_VIAGEM" ? "warning" : "success"
                  }
                >
                  {truck.statusCaminhao}
                </p>
                <div
                  className={truck.status === "INATIVO" ? "error" : "success"}
                >
                  {truck.status}
                  <button>
                    <i className="ph ph-pencil"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
      <CreateTruckModal
        isOpen={isCreateTruckModalOpen}
        onRequestClose={() => setIsCreateTruckModalOpen(false)}
      />
    </CaminhoesContainer>
  );
};
