import React, { useState } from "react";

import { GlobalStyle } from "./component/Global";

import { ReactComponent as MoonSVG } from "./asset/logos/moon.svg";
import { ReactComponent as SunSVG } from "./asset/logos/sun.svg";
import { ReactComponent as SearchSVG } from "./asset/logos/search.svg";
import { ReactComponent as UnsplashLogoSVG } from "./asset/logos/unslashLogo.svg";

import styled, { css, ThemeProvider } from "styled-components";
import { themes } from "./utils/themes";

const lightTheme = () => ({
  ...themes["common"],
  ...themes["light"]
});

const darkTheme = () => ({
  ...themes["common"],
  ...themes["dark"]
});

// const Header = styled.h1`
//   background-color: ${props => props.theme.bgColor};
//   color: ${props => props.theme.color};
// `;

const ThemeIcon = css`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
`;

const MoonIcon = styled(MoonSVG)`
  ${ThemeIcon}
`;

const SunIcon = styled(SunSVG)`
  ${ThemeIcon}
`;

// NAV

const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.bgColor};
  box-sizing: border-box;
  height: 8.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const UnsplashLogo = styled(UnsplashLogoSVG)`
  fill: ${props => props.theme.color};
  width: 4rem;
  height: 4rem;
  backface-visibility: hidden;
  box-sizing: border-box;
  overflow: hidden;
  vertical-align: middle;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header>Hello React</Header>
        {theme.type === "dark" && <MoonIcon onClick={setLightTheme} />}
        {theme.type === "light" && <SunIcon onClick={setDarkTheme} />}
      </>
    </ThemeProvider>
  );
};
export default App;
