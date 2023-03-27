import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useForm, FieldValues } from "react-hook-form";

import { useUsers } from "../../../../hooks/useUsers";

interface IEditUser {
  nome: string;
  senha: string;
  documento: string;
}

interface IEditUserModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idUsuario: number;
}

export function EditUserModal({
  isOpen,
  onRequestClose,
  idUsuario,
}: IEditUserModalProps) {
  const { editUser } = useUsers();
  const { register, handleSubmit } = useForm();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <h2>Editar Motorista</h2>
        <form
          className="form-container"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit((data: FieldValues) => {
              idUsuario == data.idUsuario;
              editUser(
                {
                  nome: data.nome,
                  senha: data.senha,
                  documento: data.documento,
                  email: data.email,
                },
                idUsuario
              );
            });
          }}
        >
          <label htmlFor="name">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            {...register("nome")}
          />
          {/* <label htmlFor="user">Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Usuário"
            {...register("usuario")}
          /> */}

          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email")}
          />
          <label htmlFor="documento">Documento</label>
          <input
            id="documento"
            type="text"
            placeholder="Documento"
            maxLength={11}
            {...register("documento")}
          />
          {/*  <label htmlFor="status">Status</label>
          <select {...register("status")}>
            <option value="ATIVO">Ativo</option>
            <option value="INATIVO">Inativo</option>
          </select> */}

          <label htmlFor="password">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            {...register("senha")}
          />

          <button
            type="submit"
            form="form-container"
            onClick={() => {
              onRequestClose();
            }}
          >
            Editar
          </button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
