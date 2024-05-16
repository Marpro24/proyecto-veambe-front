import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;

  .header-logo {
    object-fit: cover;
    position: absolute;
    left: 40px;
  }

  .insta-link {
    padding-top: 12px;
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1.063rem;
    margin-right: 50px;
  }

  @media (max-width: 450px) {
    width: 30px;
    gap: 10px;
    .insta-link {
      font-size: 0.75rem;
      margin-right: 3px;
    }

    .header-logo {
      width: 100;
      height: 20;
      position: static;
    }
  }
`;

export default HeaderStyled;
