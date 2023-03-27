import Modal from "react-modal";
import { useGasStations } from "../../../../hooks";
import { ModalContainer } from "../styles";
import { FieldValues, useForm } from "react-hook-form";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface ICreateGasStation {
  nome: string;
  valorCombustivel: string;
}

export function CreateGasStationModal({
  isOpen,
  onRequestClose,
}: ICreateEntityModalProps) {
  const { addNewGasStation } = useGasStations();
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
        <h2>Cadastrar Posto</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit(async (data: FieldValues) => {
            const response = await addNewGasStation({
              nome: data.nome,
              valorCombustivel: data.valorCombustivel,
            });

            return response && onRequestClose();
          })}
        >
          <label htmlFor="nome">Nome do Posto</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite o nome do posto aqui"
            {...register("nome")}
          />
          <label htmlFor="valorCombustivel">Valor Combustível</label>
          <input
            id="valorCombustivel"
            type="text"
            placeholder="Digite o valor do combustível aqui"
            {...register("valorCombustivel")}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
