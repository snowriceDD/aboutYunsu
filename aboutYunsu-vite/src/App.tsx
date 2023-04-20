import { Router } from "./Router";
import { GlobalStyle } from './GlobalStyle';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Analytics />
    </>
  );
};

export default App;