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
`;
