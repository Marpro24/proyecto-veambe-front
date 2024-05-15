import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    gap: 10px;
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
    .navigation-links {
      font-size: 0.938rem;
    }
  }
`;

export default NavigationStyled;
