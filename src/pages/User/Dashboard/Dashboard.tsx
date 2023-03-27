import { useContext, useState } from "react";

import { useUsers } from "../../../shared/hooks/useUsers";
import { UsersContainer } from "./styles";
import { AuthContext } from "../../../shared/context/AuthContext";
import { EditUserModal } from "../../../shared/components/User/Modals/UserModals/EditUserModal";
import { CreateUserModal } from "../../../shared/components/User/Modals/UserModals/CreateUserModal";
import { RemoveUserModal } from "../../../shared/components/User/Modals/UserModals/RemoveUserModal";

export const Dashboard = () => {
  const { users } = useUsers();

  const { userLogin, getLoggedUsers } = useContext(AuthContext);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isRemoveUSerModalOpen, setIsRemoveUserModalOpen] = useState(false);

  const [idUserEdit, setIdUserEdit] = useState(0);
  const [idUserRemove, setIdUserRemove] = useState(0);

  const [userName, setUserName] = useState("");

  const handleOpenEditModal = (user: number) => {
    setIsEditUserModalOpen(true);
    setIdUserEdit(user);
  };

  const handleRemoveUserModal = (idUsuario: number, name: string) => {
    setIsRemoveUserModalOpen(true);
    setUserName(name);
    setIdUserRemove(idUsuario);
  };

  const [searchUser, setSearchUsers] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  return (
    <UsersContainer>
      <main className="content">
        <div className="user-trail">
          <span>Meu Painel</span>
          <span>{" > "}</span>
          <a className="selected">Dashboard</a>
        </div>

        <h2 className="title-page">Olá {userLogin}</h2>
        <button
          onClick={() => setIsCreateUserModalOpen(true)}
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
          <p>
            <select
              className="select"
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="all">Todas</option>
              <option value="1">Administrador </option>
              <option value="2">Colaborador</option>
              <option value="3">Motorista</option>-{" "}
            </select>
            <i className="ph ph-arrow-down"></i>
          </p>
          <p>Status - </p>
        </div>

        <div className="gas-station-body ">
          {users
            .sort((user) => {
              return user.statusUsuario === "ATIVO" ? -1 : 1;
            })

            .filter((user) =>
              user.nomeUsuario.toLowerCase().includes(searchUser.toLowerCase())
            )
            .map((user) => (
              <div
                className={
                  user.statusUsuario === "ATIVO" ? "trip ativo" : "trip inativo"
                }
                key={user.idUsuario}
              >
                <p>{user.nomeUsuario}</p>
                <div>
                  <p>{user.documento}</p>
                </div>

                <div>
                  <p>{user.nome.replace("ROLE_", "")}</p>
                </div>
                <div
                  className={
                    user.statusUsuario === "ATIVO" ? "ativo" : "inativo"
                  }
                >
                  {user.statusUsuario}
                  <div className="btn-container">
                    <button
                      onClick={() => handleOpenEditModal(user.idUsuario)}
                      disabled={user.statusUsuario === "ATIVO" ? false : true}
                    >
                      <i title="Editar Posto" className="ph ph-pencil"></i>
                    </button>

                    <button
                      onClick={() =>
                        handleRemoveUserModal(user.idUsuario, user.nomeUsuario)
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

      <CreateUserModal
        isOpen={isCreateUserModalOpen}
        onRequestClose={() => setIsCreateUserModalOpen(false)}
      />

      <EditUserModal
        isOpen={isEditUserModalOpen}
        onRequestClose={() => setIsEditUserModalOpen(false)}
        idUsuario={idUserEdit}
      />

      <RemoveUserModal
        isOpen={isRemoveUSerModalOpen}
        nomeUsuario={userName}
        onRequestClose={() => setIsRemoveUserModalOpen(false)}
        idUsuario={idUserRemove}
      />
    </UsersContainer>
  );
};
