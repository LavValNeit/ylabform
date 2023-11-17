import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-white-100: #eef2ff;
    --color-bg: #f9fafb;
    --color-grey-text: #374151;
    --color-grey-100: #f3f4f6;
    --color-grey-300: #d1d5db;
    --color-blue-600: #4f46e5;
    --color-blue-700: #4338ca;
    --color-red: #b91c1c;

    --shadow-small: 0 1px 2px rgba(0, 0, 0, 0.04);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Roboto", sans-serif;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
    color: var(--color-grey-text);
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  button:has(svg) {
    line-height: 0;
  }

  input:focus,
  button:focus {
    outline: 2px solid var(--color-blue-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
