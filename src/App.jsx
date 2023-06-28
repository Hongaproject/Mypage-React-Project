import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import Main from "./containers/Mainp/Main";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  const Btn = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  `
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Btn><button onClick={toggleTheme}>모드 변경</button></Btn>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
