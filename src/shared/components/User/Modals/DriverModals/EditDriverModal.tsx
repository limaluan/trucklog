import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useForm, FieldValues } from "react-hook-form";
import { useDrivers } from "../../../../hooks/useDrivers";

interface IEditDriver {
  nome: string;
  senha: string;
}

interface IEditDriverModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idUsuario: number;
}

export function EditDriverModal({
  isOpen,
  onRequestClose,
  idUsuario,
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
          onSubmit={handleSubmit((data: FieldValues) => {
            idUsuario == data.idUsuario;

            editDriver(
              {
                nome: data.nome,
                usuario: data.usuario,
                senha: data.senha,
                email: data.email,
                cnh: data.cnh,
                idUsuario: data.idUsuario,
                status: "ATIVO" || "INATIVO",
                statusMotorista: "DISPONIVEL" || "EM_ESTRADA",
              },
              idUsuario
            );
          })}
        >
          <label htmlFor="name">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Nome"
            {...register("nome")}
          />
          <label htmlFor="password">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Senha"
            {...register("senha")}
          />

          <button type="submit">Editar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
