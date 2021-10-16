import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: rgb(4, 6, 9);
    --deep-dark: rgb(15, 23, 36);
    --gray-1: rgb(141,166,201);
    --gray-2: #0F1724;
    --light : #10C7C6;
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  /*barra vertical*/
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      background: var(--deep-dark);
  }
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
      box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
      background: var(--gray-1);
  }
  /*hprizontal*/
  ::-webkit-scrollbar:horizontal{
    display:none;
  }
`;

export default GlobalStyles;