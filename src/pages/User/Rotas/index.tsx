import { useEffect, useState } from "react";
import { useRoutes } from "../../../shared/hooks/useRoutes";
import { RotasContainer } from "./styles";
import {
  CreateRouteModal,
  EditRouteModal,
  DeleteRouteModal,
} from "../../../shared/components/User/Modals";

export const Rotas = () => {
  const { getRoutes, routes } = useRoutes();
  const [searchRoute, setSearchRoute] = useState("");
  const [isCreateRouteModalOpen, setIsCreateRouteModalOpen] = useState(false);
  const [isEditRouteModalOpen, setIsEditRouteModalOpen] = useState(false);

  const [idRoute, setIdRoute] = useState(0);
  const [descriptionRoute, setDescriptionRoute] = useState("");

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleRemoveEditModal = (idRota: number, descricaoRota: string) => {
    setIsDeleteModalOpen(true);
    setIdRoute(idRota);
    setDescriptionRoute(descricaoRota);
  };

  useEffect(() => {
    getRoutes();
    document.title = "Rotas | TruckLog"
  }, []);

  const handleOpenEditModal = (idRota: number, descricaoRota: string) => {
    setIsEditRouteModalOpen(true);
    setIdRoute(idRota);
    setDescriptionRoute(descricaoRota);
  };
  
  return (
    <RotasContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Rotas</a>
        </div>

        <h2 className="title-page">Rotas</h2>
        <button
          onClick={() => setIsCreateRouteModalOpen(true)}
          className="create-button"
        >
          Cadastrar Rota <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchRoute}
          onChange={(e) => setSearchRoute(e.target.value)}
          type="text"
          placeholder="Procurar postos"
        />

        <div className="gas-station-header">
          <p>
            Descrição <i className="ph ph-arrow-down"></i>
          </p>
          <p>Partida</p>
          <p>Destino</p>
          <p>Status</p>
        </div>

        <div className="gas-station-body ">
          {routes
            .sort((route) => {
              return route.status === "ATIVO" ? -1 : 1;
            })

            .filter((route) =>
              route.descricao.toLowerCase().includes(searchRoute.toLowerCase())
            )
            .map((route) => (
              <div
                className={
                  route.status === "ATIVO" ? "posto ativo" : "posto inativo"
                }
                key={route.idRota}
              >
                <p>{route.descricao}</p>
                <div>
                  <p>{route.localPartida}</p>
                </div>
                <div>{route.localDestino}</div>
                <div className={route.status === "ATIVO" ? "ativo" : "inativo"}>
                  {route.status}
                </div>

                <div className="btn-container">
                  <button
                    onClick={() =>
                      handleOpenEditModal(route.idRota, route.descricao)
                    }
                    disabled={route.status === "ATIVO" ? false : true}
                  >
                    <i title="Editar Posto" className="ph ph-pencil"></i>
                  </button>

                  <button
                    onClick={() =>
                      handleRemoveEditModal(route.idRota, route.descricao)
                    }
                    title="Deletar Posto"
                    disabled={route.status === "ATIVO" ? false : true}
                  >
                    <i className="ph ph-trash delete-icon"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>
      <CreateRouteModal
        isOpen={isCreateRouteModalOpen}
        onRequestClose={() => setIsCreateRouteModalOpen(false)}
      />

      <EditRouteModal
        isOpen={isEditRouteModalOpen}
        onRequestClose={() => setIsEditRouteModalOpen(false)}
        descricaoRota={descriptionRoute}
        idRota={idRoute}
      />

      <DeleteRouteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        idRota={idRoute}
        descricaoRota={descriptionRoute}
      />
    </RotasContainer>
  );
};
