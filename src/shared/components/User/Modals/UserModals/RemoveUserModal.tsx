import Modal from "react-modal";
import { ModalContainer } from "../styles";

import { useUsers } from "../../../../hooks/useUsers";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;

  idUsuario: number;
  nomeUsuario: string;
}

export function RemoveUserModal({
  isOpen,
  onRequestClose,
  nomeUsuario,
  idUsuario,
}: ICreateEntityModalProps) {
  const { removeUser } = useUsers();

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
              Nome: <strong>{nomeUsuario}</strong>
            </p>
            <div className="delete-btn-container  ">
              <button
                className="delete-btn"
                onClick={() => removeUser(idUsuario)}
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
