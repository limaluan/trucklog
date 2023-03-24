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
        <div className="delete-gas-station-modal">
          <h2>Tem certeza que deseja deletar?</h2>
          <p>Posto: {namePosto}</p>
          <button onClick={() => removeGasStation(idPosto)}>Deletar</button>
          <button onClick={() => alert("cancelar")}>Cancelar</button>
        </div>
      </ModalContainer>
    </Modal>
  );
}
