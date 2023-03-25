import Modal from "react-modal";
import { ModalContainer } from "./styles";

import { useForm } from "react-hook-form";
import { IDriver, useDrivers } from "../../../hooks/useDrivers";

interface ICreateEntityModalPropsDriver {
  isOpen: boolean;
  onRequestClose: () => void;
}

type IEditDriver = Pick<IDriver, 'nome' | 'senha'>;

export function CreateDriverModal({
  isOpen,
  onRequestClose,
}: ICreateEntityModalPropsDriver) {
  const { createDriver } = useDrivers();

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
        <h2>Adicionar Motorista</h2>
        <form
          className="form-container"
          onSubmit={handleSubmit((data) => {
            createDriver({
              nome: data.nome,
              usuario: data.usuario,
              senha: data.senha,
              email: data.email,
              cnh: data.cnh,
              idUsuario: 1,
              status: "FINALIZADA" || "EM_ANDAMENTO",
              statusMotorista: "DISPONIVEL" || "EM_ESTRADA",
            });
          })}
        >
          <label htmlFor="name">Nome</label>
          <input type="text" placeholder="Nome" {...register("nome")} />
          <label htmlFor="user">Usuário</label>
          <input type="text" placeholder="Usuário" {...register("usuario")} />
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Senha" {...register("senha")} />
          <label htmlFor="cnh">Cnh</label>
          <input type="text" placeholder="CNH" {...register("cnh")} />
          <label htmlFor="situation">Disponibilidade</label>
          <select {...register("statusMotorista")}>
            <option value="DISPONIVEL">Disponível</option>
            <option value="EM_ESTRADA">Em estrada</option>
          </select>
          <label htmlFor="email">E-mail</label>
          <input type="email" placeholder="E-mail" {...register("email")} />
          <button type="submit">Cadastrar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}

// export function EditDriverModal({
//   isOpen,
//   onRequestClose,
// }: IEditDriverModalProps) {
//   const { editDriver } = useDrivers();

//   const { register, handleSubmit } = useForm();

//   return (
//     // <Modal
//   isOpen={isOpen}
//   onRequestClose={onRequestClose}
//   className="modal-content"
//   overlayClassName="modal-overlay"
//   ariaHideApp={false}
// >
//   <ModalContainer>
//     <h2>Editar Motorista</h2>
//     <form
//       className="form-container"
//       onSubmit={handleSubmit((data: IEditDriver) => {
//         editDriver({
//           nome: data.nome,
//           senha: data.senha,
//         });
//       })}
//     >
//       <label htmlFor="name">Nome</label>
//       <input type="text" placeholder="Nome" {...register("nome")} />

//       <label htmlFor="password">Senha</label>
//       <input type="text" placeholder="Senha" {...register("senha")} />

//       <button type="submit">Adicionar</button>
//     </form>
//   </ModalContainer>
// </Modal>
//);
