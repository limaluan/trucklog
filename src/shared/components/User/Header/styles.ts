import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme["gray-100"]};
  box-shadow: 2px 0 3px rgba(0,0,0,0.1);

  gap: 0.5rem;

  img {
    height: 80%;
  }

  i {
    font-size: 2rem;
    margin-left: 2rem;
    padding: 1rem;
    border-radius: 90rem;
    cursor: pointer;
    transform: translateY(-0.2rem);
  }

  i:hover {
    background-color: ${props => props.theme["gray-100"]};
    transition: background 200ms;
  }
`;
