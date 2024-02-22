import {
  Box,
  CssBaseline,
  Fade,
  Grid,
  IconButton,
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

  // const [showContent, setShowContent] = useState(true);
  // const [enableScroll, setEnableScroll] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [enableScroll, setEnableScroll] = useState(false);
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
        style={{ height: "100vh", overflow: enableScroll ? "auto" : "hidden" }}
      >
        <IntroAnimation handleAnimationEnd={handleAnimationEnd} />
        <Fade in={showContent} timeout={500} addEndListener={endListener}>
          <Box display="flex" flexDirection="column">
            <Grid container alignItems="center">
              <Grid item xs={6}>
                <img
                  alt="Kyle Pacheco"
                  src={myPhoto}
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column" justifyContent="center">
                  <Grid item>
                    <Typography style={{ textAlign: "center" }} variant="h1">
                      Kyle Pacheco
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="secondary"
                      style={{ textAlign: "center" }}
                      variant="h2"
                    >
                      Software Developer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-evenly"
                    >
                      <IconButton size="medium" color="secondary">
                        <LinkedIn style={{ fontSize: 100 }} />
                      </IconButton>
                      <IconButton size="medium" color="secondary">
                        <GitHub style={{ fontSize: 100 }} />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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
