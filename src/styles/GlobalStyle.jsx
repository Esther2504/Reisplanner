import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
}

img, picture, video, canvas, svg {
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

#root, #__next {
  isolation: isolate;
}

/* default font styles */
p, h1, h2, h3, h4 {
  color: #3a415e;
  overflow-wrap: break-word;
}

p {
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
}

h1 {
  font-weight: 700;
  font-size: 5rem;
  line-height: 50px;
  letter-spacing: -0.45px;
}

h2 {
  font-weight: 700;
  font-size: 4rem;
  line-height: 42px;
  letter-spacing: -0.35px;
}

h3 {
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 36px;
  letter-spacing: -0.285714px;
}

h4 {
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 36px;
  letter-spacing: -0.285714px;
}


`;
