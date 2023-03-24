import { useState } from "react";
import { useGasStations } from "../../../shared/hooks/useGasStations";
import { PostosContainer } from "./styles";
import {
  CreateGasStationModal,
  EditGasStationModal,
} from "../../../shared/components/Collaborator/Modals";

export const Postos = () => {
  const { gasStations } = useGasStations();
  const [searchGasStation, setGasStation] = useState("");
  const [isCreateGasStationModalOpen, setIsCreateGasStationModalOpen] = useState(false);
  const [isEditGasStationModalOpen, setIsEditGasStationModalOpen] =
    useState(false);
  // const [isDisabled, setIsDisabled] = useState(false);

  return (
    <PostosContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Postos</a>
        </div>

        <h2 className="title-page">Postos</h2>
        <button
          onClick={() => setIsCreateGasStationModalOpen(true)}
          className="create-button"
        >
          Cadastrar Posto <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchGasStation}
          onChange={(e) => setGasStation(e.target.value)}
          type="text"
          placeholder="Procurar postos"
        />

        <div className="gas-station-header">
          <p>
            Descrição <i className="ph ph-arrow-down"></i>
          </p>
          <p>Preço -</p>
          <p>Status -</p>
        </div>

        <div className="gas-station-body ">
          {gasStations
            .sort((item) => {
              return item.status === "ATIVO" ? -1 : 1;
            })

            .filter((gasStation) =>
              gasStation.nome
                .toLowerCase()
                .includes(searchGasStation.toLowerCase())
            )
            .map((gasStation) => (
              <div
                className={
                  gasStation.status === "ATIVO" ? "trip ativo" : "trip inativo"
                }
                key={gasStation.idPosto}
              >
                <p>{gasStation.nome}</p>
                <div>
                  <p>
                    {gasStation.valorCombustivel.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <div
                  className={
                    gasStation.status === "ATIVO" ? "ativo" : "inativo"
                  }
                >
                  {gasStation.status}
                  <button
                    onClick={() => setIsEditGasStationModalOpen(true)}
                    disabled={gasStation.status === "ATIVO" ? false : true}
                  >
                    <i className="ph ph-pencil"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>

      <CreateGasStationModal
        isOpen={isCreateGasStationModalOpen}
        onRequestClose={() => setIsCreateGasStationModalOpen(false)}
      />

      <EditGasStationModal
        isOpen={isEditGasStationModalOpen}
        onRequestClose={() => setIsEditGasStationModalOpen(false)}
      />
    </PostosContainer>
  );
};
