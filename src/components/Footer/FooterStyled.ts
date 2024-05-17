import styled from "styled-components";

const FooterStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.mainLight};
  font-size: 1.063rem;
  bottom: 0;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-around;
  position: absolute;

  .footer__text {
    color: ${({ theme }) => theme.colors.accent};
    font-size: 1rem;
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
  }

  .media__icons {
    display: flex;
    gap: 10px;
    font-size: 2rem;
  }

  @media (max-width: 450px) {
    position: fixed;
  }
`;

export default FooterStyled;
