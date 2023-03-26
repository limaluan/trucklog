import { useState } from "react";
import //   CreateUserModal,
//   EditUserModal,
//   DeleteUserModal,
"../../../shared/components/User/Modals/";

import { useUsers } from "../../../shared/hooks/useLoginUser";
import { UsersContainer } from "./styles";

export const Dashboard = () => {
  const { users } = useUsers();

  const [searchUser, setSearchUsers] = useState("");

  return (
    <UsersContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Dashboard</a>
        </div>

        <h2 className="title-page">Olá </h2>
        <button
          //onClick={() => setIsCreateGasStationModalOpen(true)}
          className="create-button"
        >
          Cadastrar Usuário <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchUser}
          onChange={(e) => setSearchUsers(e.target.value)}
          type="text"
          placeholder="Procurar Usuários"
        />

        <div className="gas-station-header">
          <p>
            Nome <i className="ph ph-arrow-down"></i>
          </p>
          <p>Documento -</p>
          <p>Cargo -</p>
          <p>Status - </p>
        </div>

        <div className="gas-station-body ">
          {users
            .sort((user) => {
              return user.status === "ATIVO" ? -1 : 1;
            })

            .filter((user) =>
              user.nome.toLowerCase().includes(searchUser.toLowerCase())
            )
            .map((user) => (
              <div
                className={
                  user.status === "ATIVO" ? "trip ativo" : "trip inativo"
                }
                key={user.idUsuario}
              >
                <p>{user.nome}</p>
                <div>
                  <p>{user.documento}</p>
                </div>

                <div>
                  <p>{user.idCargo}</p>
                </div>
                <div className={user.status === "ATIVO" ? "ativo" : "inativo"}>
                  {user.status}
                  <div className="btn-container">
                    <button
                      // onClick={() => handleOpenEditModal(gasStation.idPosto)}
                      disabled={user.status === "ATIVO" ? false : true}
                    >
                      <i title="Editar Posto" className="ph ph-pencil"></i>
                    </button>

                    <button
                      //   onClick={() =>
                      //     //handleRemoveEditModal(
                      //     //  gasStation.idPosto,
                      //      // gasStation.nome
                      //     //)
                      //   }
                      disabled={user.status === "ATIVO" ? false : true}
                    >
                      <i
                        title="Deletar Posto"
                        className="ph ph-trash delete-icon"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>

      {/* <CreateGasStationModal
        isOpen={isCreateGasStationModalOpen}
        onRequestClose={() => setIsCreateGasStationModalOpen(false)}
      />

      <EditGasStationModal
        isOpen={isEditGasStationModalOpen}
        onRequestClose={() => setIsEditGasStationModalOpen(false)}
        idPosto={idPostoEdit}
      />

      <RemoveGasStationModal
        isOpen={isRemoveGasStationModalOpen}
        onRequestClose={() => setIsRemoveGasStationModalOpen(false)}
        idPosto={idPostoRemove}
        namePosto={gasStationName}
      /> */}
    </UsersContainer>
  );
};
