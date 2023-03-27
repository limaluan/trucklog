import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useForm } from "react-hook-form";
import { IUserComplete, useUsers } from "../../../../hooks/useUsers";
import { number } from "yargs";

interface ICreateEntityModalPropsDriver {
  isOpen: boolean;
  onRequestClose: () => void;
}

// type IEditDriver = Pick<IUserComplete, "nome" | "senha">;

export function CreateUserModal({
  isOpen,
  onRequestClose,
}: ICreateEntityModalPropsDriver) {
  const { addNewUser } = useUsers();

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
        <h2>Adicionar Usuário</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data) => {
            addNewUser({
              login: data.usuario,
              senha: data.senha,
              nome: data.nome,
              email: data.email,
              documento: data.documento,
            });
          })}
        >
          <label htmlFor="name">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            {...register("nome")}
          />
          <label htmlFor="user">Usuário</label>
          <input
            id="usuario"
            type="text"
            placeholder="Usuário"
            {...register("usuario")}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            {...register("senha")}
          />
          <label htmlFor="documento">Documento</label>
          <input
            id="documento"
            type="text"
            placeholder="CNH ou CPF"
            {...register("documento")}
          />
          {/* <label id="status" htmlFor="situation">
            Disponibilidade
          </label>
          <select {...register("status")}>
            <option value="ATIVO">Ativo</option>
            <option value="INATIVO">Inativo</option> // Não precisa para cadastrar
          </select> */}
          <label htmlFor="email"> E-mail</label>
          <input type="email" placeholder="E-mail" {...register("email")} />
          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
