import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    gap: 50px;
    padding-top: 10px;
  }

  .navigation-links {
    font-size: 1.063rem;
    color: ${({ theme }) => theme.colors.accent};
  }

  .active {
    color: black;
  }

  @media (max-width: 450px) {
    .navigation {
      gap: 10px;
    }
    .navigation-links {
      font-size: 0.75rem;
    }
  }
`;

export default NavigationStyled;
