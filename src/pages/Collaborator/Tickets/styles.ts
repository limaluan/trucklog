import styled from "styled-components";

export const TicketsContainer = styled.div`
  width: 100%;

  .mobile {
    display: none;
  }

  [class$="content"] {
    max-width: 80vw;
    margin: 0 auto;
  }

  main {
    height: 90vh;
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

  .empty-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img {
      filter: invert(69%) sepia(7%) saturate(3545%) hue-rotate(111deg)
        brightness(94%) contrast(77%);
    }
  }
`;
