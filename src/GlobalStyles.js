import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* 1. CSS Reset-ish */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 2. Base Typography */
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: clamp(0.95rem, 0.9rem + 0.2vw, 1rem);
    line-height: 1.6;
    color: #27272a; 
    background-color: #f7f7f7;
  }

  :root {
  --orange: #f97316;
  --orange-dark: #ea580c;
  }

  /* 3. Heading System */
  h1 {
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  /* 4. Vertical Rhythm (consistent section spacing) */
  section {
    padding: 4rem 0; /* universal spacing */
  }

  @media (min-width: 768px) {
    section {
      padding: 6rem 0; /* larger screens = more breathing room */
    }
  }

  /* 5. List adjustments */
  ul {
    margin-left: 1.2rem;
  }

  li {
    margin-bottom: 0.4rem;
  }
`;

export default GlobalStyles;