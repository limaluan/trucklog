import { useContext, useState } from "react";

import { useUsers } from "../../../shared/hooks/useUsers";
import { UsersContainer } from "./styles";
import { AuthContext } from "../../../shared/context/AuthContext";
import { EditUserModal } from "../../../shared/components/User/Modals/UserModals/EditUserModal";
import { CreateUserModal } from "../../../shared/components/User/Modals/UserModals/CreateUserModal";
import { RemoveUserModal } from "../../../shared/components/User/Modals/UserModals/RemoveUserModal";
import { AddRoleModal } from "../../../shared/components/User/Modals";

export const Dashboard = () => {
  const { users } = useUsers();

  const { userLogin, getLoggedUsers } = useContext(AuthContext);
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isRemoveUSerModalOpen, setIsRemoveUserModalOpen] = useState(false);
  const [isAddRoleModalOpen, setIsAddRoleModalOpen] = useState(false);

  const [idUserEdit, setIdUserEdit] = useState(0);
  const [idUserRemove, setIdUserRemove] = useState(0);

  const [userName, setUserName] = useState("");

  const handleAddRole = (idUsuario: number) => {
    setIsAddRoleModalOpen(true);
    setIdUserEdit(idUsuario);
  };

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

                <div className={user.status === "ATIVO" ? "ativo" : "inativo"}>
                  {user.status}
                  <div className="btn-container">
                    <button
                      onClick={() => handleAddRole(user.idUsuario)}
                      disabled={user.status === "ATIVO" ? false : true}
                    >
                      <i
                        title="Editar cargos "
                        className="ph ph-address-book"
                      ></i>
                    </button>
                    <button
                      onClick={() => handleOpenEditModal(user.idUsuario)}
                      disabled={user.status === "ATIVO" ? false : true}
                    >
                      <i title="Editar User" className="ph ph-pencil"></i>
                    </button>

                    <button
                      onClick={() =>
                        handleRemoveUserModal(user.idUsuario, user.nome)
                      }
                      disabled={user.status === "ATIVO" ? false : true}
                    >
                      <i
                        title="Deletar User"
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
      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onRequestClose={() => setIsAddRoleModalOpen(false)}
        idUsuario={idUserEdit}
      ></AddRoleModal>
    </UsersContainer>
  );
};
