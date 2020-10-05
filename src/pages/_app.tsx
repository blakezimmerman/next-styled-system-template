import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styling";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
