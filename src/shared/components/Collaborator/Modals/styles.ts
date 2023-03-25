import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["green-700"]};
  }

  p {
    padding: 1rem;
    text-align: center;
    border: 1px transparent black;
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 1px 1px;
    font-size: 1.6rem;
    strong {
      color: ${(props) => props.theme["green-700"]};
    }
  }

  .delete-gas-station {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    .delete-btn-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;

      .delete-btn {
        text-align: center;
        background-color: ${(props) => props.theme.status.error};
      }

      .canceal-btn {
        text-align: center;
        background-color: ${(props) => props.theme["gray-300"]};
      }
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;

    label {
      margin-top: 1rem;
      font-size: 1.6rem;
      color: ${(props) => props.theme["green-700"]};
    }

    input,
    select {
      all: unset;
      width: 95%;
      padding: 1rem;
      border: 1px solid ${(props) => props.theme["gray-100"]};
      font-size: 1.4rem;
      border-radius: 0.5rem;
    }

    button {
      width: fit-content;
      padding: 1rem 1.5rem;
      margin: 1.5rem auto 0 auto;
    }
  }
`;
