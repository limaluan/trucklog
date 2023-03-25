import Modal from "react-modal";
import { useGasStations } from "../../../../hooks/useGasStations";
import { ModalContainer } from "../styles";
import { FieldValues, useForm } from "react-hook-form";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idPosto: number;
}

interface IEditGasStation {
  nome: string;
  valorCombustivel: string;
}

export function EditGasStationModal({
  isOpen,
  onRequestClose,
  idPosto,
}: ICreateEntityModalProps) {
  const { editGasStation } = useGasStations();
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
        <h2>Edite os dados do Posto</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data: FieldValues) =>
            editGasStation(
              {
                nome: data.nome,
                valorCombustivel: parseInt(data.valorCombustivel, 10),
              },
              idPosto
            )
          )}
        >
          <label htmlFor="nome">Nome do Posto</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite o novo nome do posto"
            {...register("nome")}
          />
          <label htmlFor="valorCombustivel">Valor Combustível</label>
          <input
            id="valorCombustivel"
            type="text"
            placeholder="Digite o novo valor do combustível"
            {...register("valorCombustivel")}
          />

          <button type="submit">Editar Posto</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
