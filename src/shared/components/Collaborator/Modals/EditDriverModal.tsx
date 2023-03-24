import Modal from "react-modal";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { useDrivers } from "../../../hooks/useDrivers";

interface IEditDriver {
  nome: string;
  senha: string;
}
interface IEditDriverModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditDriverModal({
  isOpen,
  onRequestClose,
}: IEditDriverModalProps) {
  const { editDriver } = useDrivers();
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
          onSubmit={handleSubmit((data) => {
            editDriver({
              nome: data.nome,
              usuario: data.usuario,
              senha: data.senha,
              email: data.email,
              cnh: data.cnh,
              idUsuario: 1,
              status: "FINALIZADA" || "EM_ANDAMENTO",
              statusMotorista: "DISPONIVEL" || "EM_ESTRADA",
            });
          })}
        >
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="Nome" {...register("nome")} />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Senha" {...register("senha")} />
          <button type="submit">Editar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
