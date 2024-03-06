import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Fade,
  Grid,
  GridSize,
  IconButton,
  LinearProgress,
  Paper,
  Theme,
  ThemeProvider,
  Typography,
  createTheme,
  makeStyles,
} from "@material-ui/core";
import React, { createContext, useCallback, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import {
  mobileNavbarHeight,
  navbarHeight,
  navbarRaw,
} from "./components/Navbar/Navbar.styles";
import pages from "./pages/index";
import { MOBILE_NAV_BREAKPOINT, colors, themeOptions } from "./theme";

// transparenttextures.com
import diamond from "./images/backgrounds/diamond-upholstery.png";
import useMobilePage from "./pages/hooks/useMobilePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { TypeName } from "./pages/TypeName";
import { useDelay, useTypeEffect } from "./hooks";
import { TypingTypography } from "./components/TypingTypography";
import { IntroAnimation } from "./pages/IntroAnimation";
import myPhoto from "./images/myself.jpg";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { Intro } from "./pages/Intro";
import { About } from "./pages/About";
import { Navigation } from "./components/Navigation";
import { Skills } from "./pages/Skills";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Education } from "./pages/Education";
import { FooterUpdated } from "./components/FooterUpdated/FooterUpdated";
import { AppContext } from "./AppContext";

const useStyles = makeStyles<Theme, { isMobile: boolean }>({
  app: {
    maxHeight: "100vh",
    minHeight: "100vh",
    backgroundColor: colors.background,
    // backgroundImage: `url(${diamond})`,
  },
  content: {
    paddingTop: ({ isMobile }) =>
      isMobile ? mobileNavbarHeight : navbarHeight,
    paddingBottom: ({ isMobile }) =>
      isMobile ? mobileNavbarHeight : navbarHeight,
    paddingLeft: `${navbarRaw}vw`,
    paddingRight: `${navbarRaw}vw`,
    display: "flex",
    flexDirection: "column",
  },
});

function App() {
  const isMobile = useMobilePage(700);

  const theme = createTheme(themeOptions);

  // const [showContent, setShowContent] = useState(true);
  // const [enableScroll, setEnableScroll] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
  const handleAnimationEnd = useCallback(() => setShowContent(true), []);

  const endListener = useCallback(
    ({ style: { opacity } }: HTMLElement) => {
      // console.log("kdp HERE: ", opacity);
      // if (opacity === "0") {
      //   setEnableScroll(true);
      // }
      setEnableScroll(true);
    },
    [handleAnimationEnd]
  );

  return (
    <AppContext.Provider value={{ isMobile }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          style={{
            height: "100vh",
            overflowY: enableScroll ? "auto" : "hidden",
            overflowX: "hidden",
            scrollbarColor: "#973700 transparent",
          }}
        >
          <IntroAnimation handleAnimationEnd={handleAnimationEnd} />
          <Fade
            in={showContent}
            timeout={1000}
            addEndListener={endListener}
            unmountOnExit
          >
            <Box display="flex" flexDirection="column" padding="32px">
              <Intro />
              <Navigation />
              <Experience />
              <Skills />
              <Projects />
              <Education />
              <FooterUpdated />
            </Box>
          </Fade>
        </Box>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
