import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  .header-logo {
    object-fit: cover;
  }

  .insta-link {
    padding-top: 12px;
    color: #6dacbf;
    font-size: 1.063rem;
    margin-right: 50px;
  }

  @media (max-width: 450px) {
    width: inherit;
    gap: 10px;
    .insta-link {
      font-size: 0.938rem;
      margin-right: 3px;
    }

    .header-logo {
      width: 100;
      height: 20;
    }
  }
`;

export default HeaderStyled;
