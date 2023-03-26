import styled from "styled-components";

export const PostosContainer = styled.main`
  width: 100%;
  overflow-x: hidden;

  input[type="text"] {
    all: unset;
    width: 98%;
    padding: 1.5rem;
    border: 1px solid ${(props) => props.theme["gray-100"]};
    font-size: 1.6rem;
    border-radius: 0.5rem;
  }

  [class$="content"] {
    max-width: 80vw;
    margin: 0 auto;
  }

  main {
    height: 90vh;
    display: flex;
    flex-direction: column;
    font-family: "Red Hat Display", sans-serif;
  }

  .user-trail {
    background-color: #d8d8d8;
    color: ${(props) => props.theme["gray-400"]};
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    width: fit-content;
    margin-top: 1rem;

    .selected {
      text-decoration: underline;
      cursor: default;
    }
  }

  .title-page {
    font-size: 2rem;
    margin: 2rem 0;
  }

  .create-button {
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2rem;

    i {
      font-size: 1.6rem;
    }
  }

  .gas-station-header {
    display: grid;
    width: 100%;
    font-size: 1.6rem;
    position: relative;
    padding: 1.5rem 3.2rem 1.5rem 1rem;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-gap: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme["gray-200"]};

    p {
      font-weight: 700;
      width: fit-content;

      :hover {
        cursor: pointer;
      }
    }
  }

  .gas-station-body {
    flex: 1;
    margin-bottom: 2.5rem;
    overflow-y: scroll;

    p {
      display: flex;
      justify-content: space-between;
      flex: 1;
    }

    i,
    .delete-icon {
      padding: 0.5rem;
      border-radius: 0.5rem;
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.status.warning};
      cursor: pointer;
    }

    .delete-icon {
      background-color: ${(props) => props.theme.status.error};
    }
  }

  .inativo {
    opacity: 0.4;
  }

  .posto {
    display: grid;
    width: 100%;
    font-size: 1.6rem;
    position: relative;
    padding: 1.5rem 1rem;
    grid-template-columns: 1.5fr 1fr 1fr;
    grid-gap: 0.5rem;
    border-bottom: 1px solid ${(props) => props.theme["gray-200"]};

    :hover {
      background-color: ${(props) => props.theme.background};
      transition: background-color 0.2s;
    }

    div.inativo,
    div.ativo {
      display: flex;
      justify-content: space-between;

      .btn-container {
        display: flex;
        gap: 0.8rem;

        button {
          background-color: transparent;
          padding: 0;
        }
      }
    }

    button:disabled {
      cursor: not-allowed;
    }

    div.inativo {
      color: ${(props) => props.theme.status.error};
    }

    div.ativo {
      color: ${(props) => props.theme.status.success};
    }
  }

  li p {
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
  }

  li {
    background-color: ${(props) => props.theme.white};
  }

  li:nth-child(odd) {
    background-color: ${(props) => props.theme.background};
  }

  li:hover {
    filter: brightness(0.8);
    transition: filter 150ms;
  }

  p input {
    margin-right: 1rem;
    width: 2rem;
    height: 2rem;
  }
`;
