import Modal from "react-modal";
import { useRoutes } from "../../../../hooks";
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

export function CreateRouteModal({
  isOpen,
  onRequestClose,
}: ICreateEntityModalProps) {
  const { createRoute } = useRoutes();
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
        <h2>Cadastrar Rota</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit(async (data: FieldValues) => {
            const isOk = await createRoute({
              descricao: data.descricao,
              localPartida: data.localPartida,
              localDestino: data.localDestino,
            });

            isOk && onRequestClose();
          })}
        >
          <label htmlFor="descricao">Descrição rota</label>
          <input
            id="descricao"
            type="text"
            placeholder="Digite a descrição da nova rota aqui"
            {...register("descricao")}
          />
          <label htmlFor="localPartida">Local de Partida</label>
          <input
            id="localPartida"
            type="text"
            placeholder="Digite o local de partida aqui"
            {...register("localPartida")}
          />

          <label htmlFor="localPartida">Local de Destino</label>
          <input
            id="localDestino"
            type="text"
            placeholder="Digite o local de destino aqui"
            {...register("localDestino")}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
