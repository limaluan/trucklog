import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  .header-content {
    display: flex;
    max-width: 140rem;
    margin: auto;
    justify-content: space-between;
    height: 10vh;
    margin-bottom: 1rem;

    svg {
      height: 1.6rem;

      &:hover {
        cursor: pointer;
      }
    }

    h3 {
      display: flex;
      align-items: center;
    }

    .selected {
      filter: invert(69%) sepia(7%) saturate(3545%) hue-rotate(111deg)
        brightness(94%) contrast(77%);
    }
  }

  // --Nav
  .nav-links {
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: center;

    img {
      transform: translateY(0.2rem);
      height: 1.6rem;
      margin-right: 0.5rem;
    }
  }

  // --User Area
  .user-area {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: var(--gray-100);
    border-radius: 3rem;
    padding: 1rem 2rem;

    img {
      height: 5rem;
      border-radius: 1rem;
    }

    .user-img {
      width: 5rem;
      height: 5rem;
      border-radius: 5rem;
      background: url("https://www.blogdoedyy.com.br/wp-content/uploads/2022/08/IMG_20220819_192620.jpg");
      background-size: cover;
      background-position: center;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;
