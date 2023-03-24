import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}

a {
  all: unset;
  cursor: pointer;
  color: inherit;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
  font-family: "Red Hat Display", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Anybody", cursive;
  font-weight: 700;
}

button {
  all: unset;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

button:hover {
  background-color: ${(props) => props.theme["green-600"]};
  transition: background-color 200ms;
}

/* Modal */
.modal-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 10000;
    display: grid;
    place-items: center;
  }

  .modal-content {
    max-width: 40vw;
    min-width: 30vw;
    height: fit-content;
    position: absolute;
    position: relative;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 1.5rem;
    outline: none;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
    -5px -5px 10px rgba(0,0,0,0.1);

    animation: intro-modal 400ms;
    
    @keyframes intro-modal {
        0% {
          margin-top: 60rem;
        }
        100% {
          margin: 0;
        }
      }
  }

`;
