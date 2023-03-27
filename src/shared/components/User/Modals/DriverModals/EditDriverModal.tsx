import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useForm, FieldValues } from "react-hook-form";
import { useRoles } from "../../../../hooks/useRoles";

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
  const { editUserByRole } = useRoles();
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
        <h2>Editar Usuario</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data: FieldValues) => {
            idUsuario == data.idUsuario;

            editUserByRole(
              {
                idUsuario: data.idUsuario,
                login: data.login,
                nomeUsuario: data.nomeUsuario,
                email: data.email,
                documento: data.documento,
                statusUsuario: data.statusUsuario,
                idCargo: data.idCargo,
                nome: data.nome,
                idCaminhao: data.idCaminhao,
                modelo: data.modelo,
                placa: data.placa,
                nivelCombustivel: data.nivelCombustivel,
                statusCaminhao: data.statusCaminhao,
                statusGeralCaminhao: data.statusGeralCaminhao,
                idRota: data.idRota,
                descricaoRota: data.descricaoRota,
                localPartida: data.localPartida,
                localDestino: data.localDestino,
                statusRota: data.statusRota,
                idPosto: data.idPosto,
                nomePosto: data.nomePosto,
                valorCombustivel: data.valorCombustivel,
                statusPosto: data.statusPosto,
                idViagem: data.idViagem,
                descricaoViagem: data.descricaoViagem,
                dataInicio: data.dataInicio,
                dataFim: data.dataFim,
                statusViagem: data.statusViagem,
                // statusMotorista: "DISPONIVEL" || "EM_ESTRADA",
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
