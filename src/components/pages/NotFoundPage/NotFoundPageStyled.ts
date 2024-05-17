import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  .not-found-image {
    object-fit: contain;
    position: relative;
    top: 15px;
    left: 335px;
  }

  @media (max-width: 450px) {
    .not-found-image {
      left: 0;
      top: 70px;
    }
  }
`;

export default NotFoundPageStyled;
