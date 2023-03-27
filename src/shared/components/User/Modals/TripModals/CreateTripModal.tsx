import Modal from "react-modal";
import { ModalContainer } from "../styles";

import { useState } from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";

interface ICreateEntityModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function CreateTripModal({
  isOpen,
  onRequestClose,
}: ICreateEntityModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      ariaHideApp={false}
    >
      <ModalContainer>
        <h2>Criar viagem</h2>
        <form className="form-container">
          <label htmlFor="description">Descrição</label>
          <input name="description" type="text" placeholder="Descrição" />
          <label htmlFor="start-date">Data inicial</label>
          <input name="start-date" type="date" />
          <label htmlFor="end-date">Data final</label>
          <input name="end-date" type="date" />
          <button type="submit">Criar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
}
