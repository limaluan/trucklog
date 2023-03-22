import styled from "styled-components";

export const DashboardContainer = styled.main`
  width: 100%;

  input[type="text"] {
    all: unset;
    width: 98%;
    padding: 1.5rem;
    border: 1px solid #4d4d4d;
    border-radius: 0.5rem;
  }

  input[type="text"]::placeholder {
    font-size: 1.6rem;
  }

  [class$="content"] {
    max-width: 80vw;
    margin: 0 auto;
  }

  main {
    height: 90vh;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .user-trail {
    background-color: #d8d8d8;
    color: #4d4d4d;
    border-radius: 0.5rem;
    padding: 0.5rem 2rem;
    width: fit-content;
    margin-top: 1rem;

    + h2 {
      margin-top: 4rem;
    }
  }

  .drivers-section {
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-height: 60rem;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  li p {
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding: 2rem 1rem;
  }

  li {
    background-color: #fff;
  }

  li:nth-child(odd) {
    background-color: var(--background);
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
