import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  body {
    font-family: "Red Hat Display", sans-serif;
  }

  form {
    height: 100vh;

    display: flex;
    flex-direction: column;
  }

  input {
    all: unset;
    width: 100%;
  }

  button {
    all: unset;
    background-color: ${(props) => props.theme["green-700"]};
    color: ${(props) => props.theme.white};
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.6rem;
    transition: background-color 300ms;
    cursor: pointer;
  }

  button:hover {
    background-color: ${(props) => props.theme["green-500"]};
  }

  button i {
    font-size: 2rem;
  }

  h1,
  h3 {
    color: ${(props) => props.theme["green-700"]};
  }

  h1 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
    font-family: "Red Hat Display", sans-serif;
  }

  a {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${(props) => props.theme["green-700"]};
    transition: color 100ms;
    width: fit-content;
  }

  a:hover {
    color: ${(props) => props.theme["green-500"]};
  }

  .bg-items {
    z-index: -5;
  }

  .bg-truck {
    width: 40%;
    position: absolute;
    bottom: 6rem;
    left: 0;
  }

  .bg-object1 {
    position: absolute;
    right: 0;
    height: 100%;
  }

  .bg-object2 {
    width: 25%;
    position: absolute;
    left: 0;
    bottom: 6rem;
  }

  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 2rem;

    & .error {
      color: ${(props) => props.theme.status.error};
      font-weight: 700;
      font-size: 1.2rem;
      visibility: hidden;
      padding-left: 1rem;

      &.visible {
        visibility: visible;
      }
    }
  }

  .input-container {
    display: flex;
    gap: 1rem;

    padding: 2rem;
    width: 60%;
    max-width: 48rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme["gray-100"]};
    font-size: 1.6rem;

    i {
      font-size: 2.5rem;
    }

    border: 2px solid rgba(0, 0, 0, 0);

    &.outlined-error {
      border: 2px solid ${(props) => props.theme.status.error};
      animation: shake 400ms;      
      
      @keyframes shake {
        25% {
          transform: translateX(-0.5rem);
        }

        50% {
          transform: translateX(0.5rem);
        }

        75% {
          transform: translateX(-0.5rem);
        }

        90% {
          transform: translateX(0.5rem);
        }

        100% {
          transform: translateX(0);
        }
      }
    }

    &.outlined {
      border: 2px solid ${(props) => props.theme["green-500"]};
    }
  }

  .button-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;
    max-width: 48rem;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;

    .input-container {
      display: flex;
      gap: 1rem;
      width: 100%;
    }

    .button-section {
      width: 100%;
      flex-direction: column;
      gap: 2rem;
    }

    .bg-object2,
    .bg-truck {
      display: none;
    }
  }
`;
