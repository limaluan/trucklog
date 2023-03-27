import { useState } from "react";
import {
  CreateTripModal,
  EditTripModal,
} from "../../../shared/components/User/Modals";
import { useTrips } from "../../../shared/hooks/useTrips";
import { ViagensContainer } from "./styles";

export const Viagens = () => {
  const { trips } = useTrips();

  const [searchTrip, setSearchTrip] = useState("");

  const [isCreateTripModalOpen, setIsCreateTripModalOpen] = useState(false);
  const [isEditTripModalOpen, setIsEditTripModalOpen] = useState(false);

  const [idViagem, setIdViagem] = useState(0);
  const [idMotorista, setMotorista] = useState(0);

  const handleEditTrip = (idViagem: number, idMotorista: number) => {
    setIsEditTripModalOpen(true);
    setIdViagem(idViagem);
    setMotorista(idMotorista);
  };

  return (
    <ViagensContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Viagens</a>
        </div>

        <h2 className="title-page">Viagens</h2>
        <button
          onClick={() => setIsCreateTripModalOpen(true)}
          className="create-button"
        >
          Criar Viagem <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchTrip}
          onChange={(e) => setSearchTrip(e.target.value)}
          type="text"
          placeholder="Procurar viagens"
        />

        <div className="trips-header">
          <p>
            Descrição <i className="ph ph-arrow-down"></i>
          </p>
          <p>Ínicio</p>
          <p>Fim</p>
          <p>Status</p>
        </div>

        <div className="trips-body">
          {trips
            .filter((trip) =>
              trip.descricao.toLowerCase().includes(searchTrip.toLowerCase())
            )
            .map((trip) => (
              <div className="trip" key={trip.idViagem}>
                <p>{trip.descricao}</p>
                <p>
                  {new Date(Date.parse(trip.dataInicio))
                    .toLocaleDateString("pt-BR")
                    .split("/")
                    .map((value) => value.padStart(2, "0"))
                    .join("-")}
                </p>
                <p>
                  {new Date(Date.parse(trip.dataFim))
                    .toLocaleDateString("pt-BR")
                    .split("/")
                    .map((value) => value.padStart(2, "0"))
                    .join("-")}
                </p>

                <p
                  className={
                    trip.statusViagem === "FINALIZADA" ? "finished" : "progress"
                  }
                >
                  {trip.statusViagem.replace("_", " ")}{" "}
                </p>

                <button
                  onClick={() => handleEditTrip(trip.idViagem, trip.idUsuario)}
                >
                  <i className="ph ph-pencil"></i>
                </button>
              </div>
            ))}
        </div>
      </main>
      <CreateTripModal
        isOpen={isCreateTripModalOpen}
        onRequestClose={() => setIsCreateTripModalOpen(false)}
      />

      <EditTripModal
        isOpen={isEditTripModalOpen}
        onRequestClose={() => setIsEditTripModalOpen(false)}
        idViagem={idViagem}
        idMotorista={idMotorista}
      />
    </ViagensContainer>
  );
};
