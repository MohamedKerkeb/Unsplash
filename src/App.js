import React, { useState, useEffect } from "react";

import Axios from "axios";
import Masonry from "react-masonry-css";

import { GlobalStyle } from "./component/Global";

import { ReactComponent as MoonSVG } from "./asset/logos/moon.svg";
import { ReactComponent as SunSVG } from "./asset/logos/sun.svg";
import { ReactComponent as SearchSVG } from "./asset/logos/search.svg";
import { ReactComponent as UnsplashLogoSVG } from "./asset/logos/unslashLogo.svg";

import styled, { css, ThemeProvider } from "styled-components";
import { themes } from "./utils/themes";

import { CategoriesList } from "./component/CategoriesList";
import { Pics } from "./component/Pics";

require("dotenv").config();

const lightTheme = () => ({
  ...themes["common"],
  ...themes["light"]
});

const darkTheme = () => ({
  ...themes["common"],
  ...themes["dark"]
});

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

const Tiltle = styled.h1`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.color};
`;

const Subtitle = styled.span`
  font-size: 1.3rem;
  font-weight: 500;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.searchBgColor};
  border-radius: 3rem;
  border: 0.05rem solid #cbd2d9;
  margin-left: 7rem;
  box-shadow: none;
  :hover {
    border: 0.12rem solid #cbd2d9;
  }
`;

const SearchIcon = styled(SearchSVG)`
  fill: #9aa5b1;
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 1.2rem;
  margin-right: 1rem;
`;
const SearchBar = styled.input`
  outline:: none;
  border: none;
  width: 50rem;
  padding: 1rem 0;
  color: ${props => props.theme.categoryHoverColor};
  background: transparent;
  font-size: 1.4rem;
  font-weight: 300
`;

// Grid
const GridWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Grid = styled.div`
  padding-top: 8.2rem;
  padding-left: 23rem;
  display: grid;
  grid-template-columns: repeat(3, 38rem);
  margin-bottom: 1.5rem;
`;

// Api Unsplah
const APIKEY =
  process.env.API_KEY ||
  "b92cb0fd889bf002ebe6b7c146e17e293baf70925e72727f855136a0095d6faf";
const URL = "https://api.unsplash.com/photos";

// Mansory Options
const mansoryOption = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const MansoryGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -30px;
  width: auto;
`;

const MasonryGridColumn = styled.div`
  padding-left: 30px;
  background-clip: padding-box;
`;

const App = () => {
  // State Api
  const [pics, setPic] = useState([]);
  const [load, setLoad] = useState(false);

  // Theme
  const [theme, setTheme] = useState(lightTheme());
  const setDarkTheme = () => setTheme(darkTheme());
  const setLightTheme = () => setTheme(lightTheme());

  console.log(process.env);

  // Call Api
  useEffect(() => {
    const getPics = async () => {
      const pic = await Axios.get(
        `${URL}?page=1&per_page=30&order_by=popular&client_id=${APIKEY}`
      );
      setPic(pic.data);
      setLoad(true);
    };
    getPics();
  }, []);
  console.log(pics);
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Nav>
          <UnsplashLogo />
          <TitleWrapper>
            <Tiltle>Unsplash</Tiltle>
            <Subtitle>Photo for Everyone</Subtitle>
          </TitleWrapper>
          <SearchWrapper>
            <SearchIcon />
            <SearchBar placeholder="Search free high-resolution photos" />
          </SearchWrapper>
          {theme.type === "dark" && <MoonIcon onClick={setLightTheme} />}
          {theme.type === "light" && <SunIcon onClick={setDarkTheme} />}
        </Nav>
        <CategoriesList />
        <Masonry
          breakpointCols={mansoryOption}
          className={""}
          columnClassName={""}
        >
          {pics.map((pic, index) => (
            <Pics src={pic.urls.small} alt={index} key={index} />
          ))}
        </Masonry>
      </>
    </ThemeProvider>
  );
};
export default App;
