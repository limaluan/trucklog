import Modal from "react-modal";
import { useGasStations } from "../../../../hooks/useGasStations";
import { ModalContainer } from "../styles";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idPosto: number;
  namePosto: string;
}

export function RemoveGasStationModal({
  isOpen,
  onRequestClose,
  idPosto,
  namePosto,
}: ICreateEntityModalProps) {
  const { removeGasStation } = useGasStations();

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
          <h2>Tem certeza que deseja deletar?</h2>
          <p>
            Posto: <strong>{namePosto}</strong>
          </p>
          <div className="delete-btn-container">
            <button
              className="delete-btn"
              onClick={async () => {
                const response = await removeGasStation(idPosto);
                return response && onRequestClose();
              }}
            >
              Deletar
            </button>
            <button className="canceal-btn" onClick={onRequestClose}>
              Cancelar
            </button>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
}
