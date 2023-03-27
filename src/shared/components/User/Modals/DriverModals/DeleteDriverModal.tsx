import Modal from "react-modal";
import { ModalContainer } from "../styles";
import { useRoles } from "../../../../hooks/useRoles";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  idUsuario: number;
  nomeUsuario: string;
}

export function DeleteDriverModal({
  isOpen,
  onRequestClose,
  nomeUsuario,
  idUsuario,
}: ICreateEntityModalProps) {
  const { deleteUserByRole } = useRoles();

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
              Usuario: <strong>{nomeUsuario}</strong>
            </p>
            <div className="delete-btn-container  ">
              <button
                className="delete-btn"
                onClick={() =>
                  deleteUserByRole(idUsuario).then(() => {
                    onRequestClose();
                  })
                }
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
