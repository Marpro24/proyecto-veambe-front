import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}



body, h1, h2, h3, p {
  margin: 0;
    font-family: ${({ theme }) => theme.typography.mainFontFamily};

}

ul, li {
  list-style: none;
  margin: 0;
  padding-left: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background-color: inherit;
  font: inherit;
  cursor: grab;
}
`;

export default GlobalStyle;
