import styled from "styled-components";

export const SidenavContainer = styled.nav`
  width: 28rem;
  height: 90vh;
  border-right: 2px solid ${(props) => props.theme["gray-100"]};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 2rem;
  transition: all 200ms;

  .category {
    font-size: 1.2rem;
    color: ${(props) => props.theme["gray-300"]};
  }

  .item {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    font-weight: 700;
    width: 90%;
    padding: 1rem;
    cursor: pointer;
  }

  .item:hover {
    border-radius: 90rem;
    background-color: ${(props) => props.theme["gray-100"]};
    transition: background 200ms;
  }
`;
