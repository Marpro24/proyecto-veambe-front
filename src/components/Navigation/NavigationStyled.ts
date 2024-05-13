import styled from "styled-components";

const NavigationStyled = styled.nav`
  .navigation {
    display: flex;
    gap: 10px;
    padding-top: 10px;
  }

  .navigation-links {
    font-size: 1.063rem;
    color: #6dacbf;
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
