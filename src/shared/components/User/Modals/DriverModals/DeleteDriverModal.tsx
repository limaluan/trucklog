import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useDrivers } from "../../../../hooks/useDrivers";

// interface IEditDriver {
//   nome: string;
//   senha: string;
// }

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idUsuario: number;
  nome: string;
}

export function DeleteDriverModal({
  isOpen,
  onRequestClose,
  nome,
  idUsuario,
}: ICreateEntityModalProps) {
  const { deleteDriver } = useDrivers();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <div>
          <div className="delete-gas-station">
            <h2>Tem certeza que deseja deletar?</h2>
            <p>
              Motorista: <strong>{nome}</strong>
            </p>
            <div className="delete-btn-container  ">
              <button
                className="delete-btn"
                onClick={() => deleteDriver(idUsuario)}
              >
                Deletar
              </button>
              <button className="canceal-btn" onClick={() => onRequestClose()}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </ModalContainer>
    </Modal>
  );
}