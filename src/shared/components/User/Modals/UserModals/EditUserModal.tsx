import Modal from "react-modal";
import { useGasStations } from "../../../../hooks/useGasStations";
import { ModalContainer } from "../styles";
import { FieldValues, useForm } from "react-hook-form";
import { useUsers } from "../../../../hooks/useUsers";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idUsuario: number;
}

interface IEditUser {
  nome: string;
  valorCombustivel: string;
  idUsuario: number;
}

export function EditUserModal({
  isOpen,
  onRequestClose,
  idUsuario,
}: ICreateEntityModalProps) {
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
        <h2>Editar Usuário</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data: FieldValues) =>
            editUser({
              nome: data.nome,
              senha: data.senha,
              email: data.email,
              documento: data.documento,
              idUsuario,
            })
          )}
        >
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite um nome"
            {...register("nome")}
          />

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite uma senha"
            {...register("senha")}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite um e-mail"
            {...register("email")}
          />

          <label htmlFor="documento">Documento</label>
          <input
            id="documento"
            type="text"
            placeholder="Digite um documento"
            {...register("documento")}
          />

          <button type="submit">Editar Usuário</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
