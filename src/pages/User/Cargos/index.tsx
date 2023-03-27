import { useEffect, useState } from "react";
import {
  CreateDriverModal,
  EditDriverModal,
  DeleteDriverModal,
} from "../../../shared/components/User/Modals";

import { useRoles } from "../../../shared/hooks/useRoles";
import { RolesContainer } from "./styles";

export const Roles = () => {
  const { users } = useRoles();

  const [searchUsers, setSearchUsers] = useState("");

  const [isCreateByRoleModal, setIsCreateByRoleModalOpen] = useState(false);
  const [isEditByRoleModalOpen, setIsEditByRoleModalOpen] = useState(false);
  const [isDeleteByRoleModalOpen, setIsDeleteByRoleModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [idUsuario, setIdUsuario] = useState(0);

  const handleDeleteByRoleModal = (idUsuario: number, driverName: string) => {
    setIsDeleteByRoleModalOpen(true);
    setIdUsuario(idUsuario);
    setUserName(userName);
  };
  const handleEditByRoleModal = (idUsuario: number, driverName: string) => {
    setIsEditByRoleModalOpen(true);
    setIdUsuario(idUsuario);
    setUserName(driverName);
  };

  useEffect(() => {
    document.title = "Efetivo e Detalhes | TruckLog"
  }, []);
  
  return (
    <RolesContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Relatório completo</a>
        </div>

        <h2 className="title-page">Efetivo e Detalhes</h2>
        <button
          className="create-button"
          onClick={() => setIsCreateByRoleModalOpen(true)}
        >
          Cadastro Completo <i className="ph ph-plus"></i>
        </button>
        <input
          value={searchUsers}
          onChange={(e) => setSearchUsers(e.target.value)}
          type="text"
          placeholder="Procurar motoristas"
        />

        <div className="gas-station-header">
          <p>
            Nome <i className="ph ph-arrow-down"></i>
          </p>
          <p>CNH/CPF</p>
          <p>Cargo</p>
          <p>Status</p>
        </div>

        <div className="gas-station-body">
          {users
            .sort((user) => {
              return user.statusUsuario === "ATIVO" ? -1 : 1;
            })

            .filter((user) =>
              user.nome.toLowerCase().includes(searchUsers.toLowerCase())
            )
            .map((user) => (
              <div
                className={
                  user.statusUsuario === "ATIVO"
                    ? "posto ativo"
                    : "posto inativo"
                }
                key={user.idUsuario}
              >
                <p>{user.nomeUsuario}</p>
                <p>{user.documento}</p>
                {user.nome.replace("ROLE_", "")}
                <div
                  className={
                    user.statusUsuario === "ATIVO" ? "ativo" : "inativo"
                  }
                >
                  {user.statusUsuario}
                  <div className="btn-container">
                    <button
                      onClick={() =>
                        handleEditByRoleModal(user.idUsuario, user.nome)
                      }
                      disabled={user.statusUsuario === "ATIVO" ? false : true}
                    >
                      <i title="Editar Posto" className="ph ph-pencil"></i>
                    </button>

                    <button
                      onClick={() =>
                        handleDeleteByRoleModal(user.idUsuario, user.nome)
                      }
                      disabled={user.statusUsuario === "ATIVO" ? false : true}
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
      <CreateDriverModal
        isOpen={isCreateByRoleModal}
        onRequestClose={() => setIsCreateByRoleModalOpen(false)}
      />
      <EditDriverModal
        isOpen={isEditByRoleModalOpen}
        onRequestClose={() => setIsEditByRoleModalOpen(false)}
        idUsuario={idUsuario}
      />
      <DeleteDriverModal
        isOpen={isDeleteByRoleModalOpen}
        onRequestClose={() => setIsDeleteByRoleModalOpen(false)}
        idUsuario={idUsuario}
        nomeUsuario={userName}
      />
    </RolesContainer>
  );
};
