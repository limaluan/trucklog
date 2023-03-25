import Modal from "react-modal";
import { ModalContainer } from "./styles";
import { useForm } from "react-hook-form";
import { ICreateTruckDTO, useTrucks } from "../../../hooks";

interface ICreateTruckModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IFieldValues extends ICreateTruckDTO {}

export function CreateTruckModal({
  isOpen,
  onRequestClose,
}: ICreateTruckModalProps) {
  const { register, handleSubmit } = useForm<IFieldValues>();
  const { createTruck } = useTrucks();

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
        <form
          className="form-container"
          onSubmit={handleSubmit(
            async ({ modelo, nivelCombustivel, placa }: IFieldValues) => {
              const response = await createTruck({
                modelo,
                nivelCombustivel,
                placa,
              });
              return response ? onRequestClose() : null;
            }
          )}
        >
          <label htmlFor="modelo">Modelo</label>
          <input
            id="modelo"
            type="text"
            placeholder="Digite o nome do modelo"
            {...register("modelo")}
          />
          <label htmlFor="placa">Placa</label>
          <input
            id="placa"
            type="Text"
            placeholder="Digite o número da Placa"
            {...register("placa")}
          />
          <label htmlFor="nivelCombustivel">Combustível</label>
          <input
            id="nivelCombustivel"
            type="number"
            placeholder="Digite nível de Combustível"
            {...register("nivelCombustivel")}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
