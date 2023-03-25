import Modal from "react-modal";
import { ModalContainer } from "./styles";

interface ICreateTruckModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateTruckModal({
  isOpen,
  onRequestClose,
}: ICreateTruckModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <h2>Cadastrar Caminhão</h2>
        <form className="form-container">
          <label htmlFor="model">Modelo</label>
          <input
            name="model"
            type="text"
            placeholder="Digite o nome do modelo"
          />
          <label htmlFor="plate">Placa</label>
          <input
            name="plate"
            type="number"
            placeholder="Digite o número da Placa"
          />
          <label htmlFor="gas">Combustível</label>
          <input
            name="gas"
            type="number"
            placeholder="Digite nível de Combustível"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
