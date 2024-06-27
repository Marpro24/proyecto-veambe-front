import styled from "styled-components";

const HomepageStyled = styled.main`
  .hero {
    width: 550px;
    margin-left: 55px;
  }

  @media (max-width: 450px) {
    .hero {
      width: 300px;
      margin: 0;
    }
  }
`;

export default HomepageStyled;
