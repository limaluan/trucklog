import { useState } from "react";
import { useDrivers } from "../../../shared/hooks/useDrivers";
import { MotoristasContainer } from "./styles";

export const Motoristas = () => {
  const { drivers } = useDrivers();

  const [searchDriver, setSearchDrivers] = useState("");

  return (
    <MotoristasContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Motoristas</a>
        </div>

        <h2 className="title-page">Motoristas</h2>
        <button className="create-button">
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
                <p>{driver.email}</p>
              </div>
            ))}
        </div>
      </main>
    </MotoristasContainer>
  );
};
