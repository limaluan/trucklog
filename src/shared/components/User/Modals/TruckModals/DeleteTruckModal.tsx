import Modal from "react-modal";
import { useTrucks } from "../../../../hooks";
import { ModalContainer } from "../styles";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idCaminhao: number;
  placaCaminhao: string;
}

export function DeleteTruckModal({
  isOpen,
  onRequestClose,
  idCaminhao,
  placaCaminhao,
}: ICreateEntityModalProps) {
  const { deleteTruck } = useTrucks();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <div className="delete-gas-station">
          <h2>Tem certeza que deseja deletar? </h2>
          <p>
            Caminhão Placa: <strong>{placaCaminhao}</strong>
          </p>
          <div className="delete-btn-container">
            <button
              className="delete-btn"
              onClick={() => deleteTruck(idCaminhao)}
            >
              Deletar
            </button>
            <button className="canceal-btn" onClick={() => onRequestClose()}>
              Cancelar
            </button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
}
