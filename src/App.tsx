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
import React, { useCallback, useEffect, useState } from "react";
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
  const isMobile = useMobilePage(MOBILE_NAV_BREAKPOINT);
  const classes = useStyles({ isMobile });

  const theme = createTheme(themeOptions);

  const [showContent, setShowContent] = useState(true);
  const [enableScroll, setEnableScroll] = useState(true);
  // const [showContent, setShowContent] = useState(false);
  // const [enableScroll, setEnableScroll] = useState(false);
  const handleAnimationEnd = useCallback(() => setShowContent(true), []);

  const endListener = useCallback(
    ({ style: { opacity } }: HTMLElement) => {
      if (opacity === "0") {
        setEnableScroll(true);
      }
    },
    [handleAnimationEnd]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        style={{
          height: "100vh",
          overflow: enableScroll ? "auto" : "hidden",
          scrollbarColor: "#973700 transparent",
        }}
      >
        {/* <IntroAnimation handleAnimationEnd={handleAnimationEnd} /> */}
        <Fade in={showContent} timeout={1000} addEndListener={endListener}>
          <Box display="flex" flexDirection="column" padding="16px">
            <Intro />
            <Navigation />
            <About />
            <Grid container id="skills">
              <Grid item xs={12}>
                <Typography variant="h1">Skills</Typography>
              </Grid>
              <Grid container item xs={12} alignItems="center">
                <Grid item xs={4}>
                  <Typography variant="h3">React</Typography>
                </Grid>
                <Grid
                  container
                  item
                  xs={4}
                  style={{
                    backgroundColor: "#973700",
                    borderRadius: "50px",
                    overflow: "hidden",
                    height: "10px",
                  }}
                >
                  <Grid
                    item
                    xs={Math.floor(12 * 0.32) as GridSize}
                    style={{ backgroundColor: "#ffaf00" }}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h3">Senior Level</Typography>
                </Grid>
              </Grid>
            </Grid>
            <About /> <About /> <About /> <About /> <About /> <About />{" "}
            <About /> <About /> <About /> <About /> <About /> <About />{" "}
            <About /> <About /> <About /> <About />
          </Box>
        </Fade>
      </Box>
    </ThemeProvider>
  );

  return (
    <div className={classes.app}>
      {/* <Navbar options={pages} /> */}
      <div className={classes.content}>
        {/* <ScrollToTop />
        <Switch>
          {pages.map((page) => {
            if (page.subRoutes) {
              let baseRoute = (
                <Route
                  key={page.route}
                  path={page.route}
                  component={page.comp}
                />
              );
              let subRoutes = page.subRoutes.map((sub) => {
                let route = `${page.route}${sub.route}`;
                return (
                  <Route
                    key={route}
                    path={route}
                    component={sub.comp}
                    exact={true}
                  />
                );
              });
              return [...subRoutes, baseRoute];
            } else {
              return (
                <Route
                  key={page.route}
                  exact={page.title === "Home"}
                  path={page.route}
                  component={page.comp}
                />
              );
            }
          })}
        </Switch> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
