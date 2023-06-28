import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({theme}) => theme.bgColor};
    color: ${({theme}) => theme.text};
  }
`